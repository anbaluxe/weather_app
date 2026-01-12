import type { Weather } from '../../features/weather/weatherTypes'
import styles from './styles.module.css'

interface WeatherItemProps {
	weather: Weather
	date: string[]
	isFavorite: boolean
	canToggleFavorite: boolean
	handleToggleFavorite: () => void
}

export const WeatherItem = ({
	weather,
	date,
	isFavorite,
	canToggleFavorite,
	handleToggleFavorite,
}: WeatherItemProps) => {
	return (
		<div className={styles.banner}>
			<div className={styles.date_info}>
				<div className={styles.info}>
					<div className={styles.day_header}>
						<span className={styles.position}>
							<svg
								viewBox='0 0 15 20'
								xmlns='http://www.w3.org/2000/svg'
								width='15.000000'
								height='20.000000'
								fill='none'
								aria-hidden='true'
								focusable='false'
							>
								<path
									id='location'
									d='M7.5 5.625C6.46437 5.625 5.625 6.46437 5.625 7.5C5.625 8.53562 6.46437 9.375 7.5 9.375C8.53562 9.375 9.375 8.53562 9.375 7.5C9.375 6.46437 8.53562 5.625 7.5 5.625ZM7.5 10.625C5.77437 10.625 4.375 9.22625 4.375 7.5C4.375 5.77375 5.77437 4.375 7.5 4.375C9.22562 4.375 10.625 5.77375 10.625 7.5C10.625 9.22625 9.22562 10.625 7.5 10.625ZM7.5 0C3.35812 0 0 3.35812 0 7.5C0 10.6362 6.25312 20.0069 7.5 20C8.7275 20.0069 15 10.5937 15 7.5C15 3.35812 11.6419 0 7.5 0Z'
									fill='rgb(255,255,255)'
									fillRule='evenodd'
								/>
							</svg>
							<p>{weather.city}</p>
						</span>
						{canToggleFavorite && (
							<button onClick={handleToggleFavorite}>
								{isFavorite ? (
									<img
										src='/icon/Favorite-true.png'
										alt='Favorite-true'
										className={styles.favorite_icon}
									/>
								) : (
									<img
										src='/icon/Favorite-false.png'
										alt='Favorite-false'
										className={styles.favorite_icon}
									/>
								)}
							</button>
						)}
					</div>
					<div className={styles.date_info}>
						<h2 className={styles.date}>{date[0]}</h2>
						<p>
							{date[1]}, {date[2]}
						</p>
					</div>
					<div className={styles.temp_info}>
						<p className={styles.temp}>{weather.temperature}°С</p>
						<div>
							<img src={weather.icon} alt='weather' />
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	)
}
