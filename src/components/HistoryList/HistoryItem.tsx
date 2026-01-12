import { useAppDispatch } from '../../app/hooks'
import { setCityName } from '../../features/city/citySlice'
import { HistoryItem } from '../../features/history/historyTypes'
import { setViewMode } from '../../features/ui/uiSlice'
import { formatDate, formatTime } from '../../helpers/formatDate'
import styles from './styles.module.css'

interface HistoryItemProps {
	historyListSlice: HistoryItem[]
}

export const HistoryItems = ({ historyListSlice }: HistoryItemProps) => {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.history}>
			<div className={styles.history_header}>
				<h2 className={styles.history_title}>История поиска</h2>
				<button
					className={styles.history_all_button}
					onClick={() => dispatch(setViewMode('history'))}
				>
					Show All
				</button>
			</div>
			<ul className={styles.history_list}>
				{historyListSlice.map(item => {
					const now = new Date(item.createdAt)
					const date = formatDate(now).split(', ')
					const time = formatTime(now)
					return (
						<li
							key={item.id}
							className={styles.banner}
							onClick={() => dispatch(setCityName(item.city))}
						>
							<div className={styles.item}>
								<div className={styles.info}>
									<p className={styles.temp_info}>{item.temp}°C</p>
									<p className={styles.city_info}>{item.city}</p>
									<p className={styles.city_info}>{date[1]}</p>
									<p className={styles.city_info}>{time}</p>
								</div>
								<div className={styles.day_img}>
									<img src={item.img} alt={item.city} />
								</div>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
