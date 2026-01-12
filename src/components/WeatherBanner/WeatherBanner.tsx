import { useWeather } from '../../features/weather/useWeather'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'
import { WeatherItem } from './WeatherItem'

const WeatherBanner = () => {
	const {
		query,
		weather,
		error,
		isLoading,
		isFavorite,
		canToggleFavorite,
		toggleFavorite,
	} = useWeather()
	const date = formatDate(new Date()).split(', ')

	if (!query) {
		return (
			<div className={styles.banner}>
				<p>Поиск по геолокации или введите город для получения погоды</p>
			</div>
		)
	}
	if (isLoading) {
		return (
			<div className={styles.banner}>
				<p>Loading...</p>
			</div>
		)
	} else if (error) {
		if ('data' in error) {
			return (
				<div className={styles.banner}>
					<p>Ошибка запроса</p>
				</div>
			)
		} else if ('error' in error) {
			return (
				<div className={styles.banner}>
					<p>Упс... Возникла ошибка, мы быстро ее починим</p>
				</div>
			)
		} else {
			return (
				<div className={styles.banner}>
					<p>Неизвестная ошибка</p>
				</div>
			)
		}
	} else if (weather) {
		return (
			<WeatherItem
				weather={weather}
				date={date}
				isFavorite={isFavorite}
				canToggleFavorite={canToggleFavorite}
				handleToggleFavorite={toggleFavorite}
			/>
		)
	}
}

export default WeatherBanner
