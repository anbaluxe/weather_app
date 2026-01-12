import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
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
	const historyList = useSelector((state: RootState) => state.history.favorites)
	const FavoriteList = historyList.slice(0, 4)

	const date = formatDate(new Date()).split(', ')

	return (
		FavoriteList.length > 0 && (
			<div className={styles.history}>
				<div className={styles.history_header}>
					<h2 className={styles.history_title}>Избранное</h2>
				</div>
				<ul className={styles.history_list}>
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
		<li className={styles.banner} onClick={() => dispatch(setCityName(city))}>
			<div className={styles.item}>
				<div className={styles.info}>
					<p className={styles.temp_info}>{weather?.temperature}°C</p>
					<p className={styles.city_info}>{city}</p>
					<p className={styles.city_info}>{day[1]}</p>
				</div>

				<div className={styles.day_img}>
					<button
						className={styles.favorite_button}
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
