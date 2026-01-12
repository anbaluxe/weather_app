import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCityName } from '../../features/city/citySlice'
import { removeFromFavorites } from '../../features/history/historySlice'
import { formatDate } from '../../helpers/formatDate'
import { useGetWeatherByCityQuery } from '../../services/weatherApi'
import styles from './styles.module.css'

type FavoriteListProps = {
	city: string
	day: string[]
}

const FavoriteList = () => {
	const historyList = useAppSelector(state => state.history.favorites)
	const FavoriteList = historyList.slice(0, 6)

	const date = formatDate(new Date()).split(', ')

	return (
		FavoriteList.length > 0 && (
			<div className={styles.favorites}>
				<div className={styles.favoritesHeader}>
					<h2 className={styles.favoritesTitle}>Избранное</h2>
				</div>
				<ul className={styles.favoritesGrid}>
					{FavoriteList.map(item => (
						<FavoriteWeatherItem key={item.city} city={item.city} day={date} />
					))}
				</ul>
			</div>
		)
	)
}

const FavoriteWeatherItem = ({ city, day }: FavoriteListProps) => {
	const { data: weather } = useGetWeatherByCityQuery(city)

	const dispatch = useAppDispatch()
	return (
		<li
			className={styles.weatherCard}
			onClick={() => dispatch(setCityName(city))}
		>
			<div className={styles.weatherCardContent}>
				<div className={styles.weatherInfo}>
					<p className={styles.temperature}>{weather?.temperature}°C</p>
					<p className={styles.metaText}>{city}</p>
					<p className={styles.metaText}>{day[1]}</p>
				</div>

				<div className={styles.weatherAside}>
					<button
						className={styles.favoriteButton}
						onClick={e => {
							e.stopPropagation()
							dispatch(removeFromFavorites(city))
						}}
					>
						<img src='/icon/Favorite-true.png' alt='Favorite' />
					</button>

					<img src={weather?.icon} alt={city} />
				</div>
			</div>
		</li>
	)
}

export default FavoriteList
