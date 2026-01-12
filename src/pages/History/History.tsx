import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { clearHistory } from '../../features/history/historySlice'
import { setViewMode } from '../../features/ui/uiSlice'
import { formatDate } from '../../helpers/formatDate'
import styles from './style.module.css'

const History = () => {
	const historyList = useAppSelector(state => state.history.items)
	const dispatch = useAppDispatch()
	const [searchValue, setSearchValue] = useState('')

	const historyListSlice = historyList.filter(item =>
		item.city.toLowerCase().includes(searchValue.toLowerCase())
	)

	return (
		<div className={styles.history}>
			<div className={styles.container}>
				<div className={styles.history_header}>
					<button
						className={styles.history_back_button}
						onClick={() => dispatch(setViewMode('all'))}
					>
						➜
					</button>
					<h2 className={styles.history_title}>История поиска</h2>
					<form
						className={styles.search}
						onSubmit={e => {
							e.preventDefault()
						}}
					>
						<div className={styles.form_search}>
							<svg
								viewBox='0 0 21.0062 21.0062'
								xmlns='http://www.w3.org/2000/svg'
								width='21.006165'
								height='21.006165'
								fill='none'
								focusable='false'
								aria-hidden='true'
							>
								<path
									id='Vector'
									d='M15.1725 15.1412L19.5 19.5M9.5 17.5C5.08172 17.5 1.5 13.9183 1.5 9.5C1.5 5.08172 5.08172 1.5 9.5 1.5C13.9183 1.5 17.5 5.08172 17.5 9.5C17.5 13.9183 13.9183 17.5 9.5 17.5Z'
									fillRule='nonzero'
									stroke='rgb(255,255,255)'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='3'
								/>
							</svg>
							<input
								type='text'
								onChange={e => {
									setSearchValue(e.target.value)
								}}
								placeholder='Search City...'
							/>
						</div>
					</form>

					<button
						className={styles.history_all_button}
						onClick={() => dispatch(clearHistory())}
					>
						Clear History
					</button>
				</div>
				<ul className={styles.history_list}>
					{historyListSlice.map(item => {
						const date = formatDate(new Date(item.createdAt)).split(', ')

						return (
							<li key={item.id} className={styles.banner}>
								<div className={styles.item}>
									<div className={styles.info}>
										<p className={styles.temp_info}>{item.temp}°C</p>
										<p className={styles.city_info}>{item.city}</p>
										<p className={styles.city_info}>{date[1]}</p>
									</div>
									<div>
										<img src={item.img} alt={item.city} />
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default History
