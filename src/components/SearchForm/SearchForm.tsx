import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { setCityName } from '../../features/city/citySlice'
import styles from './styles.module.css'

const SearchForm = () => {
	const [inputCity, setInputCity] = useState('')
	const dispatch = useAppDispatch()

	const handleSearch = () => {
		const trimmedCity = inputCity.trim()
		if (!trimmedCity) return
		dispatch(setCityName(trimmedCity))
		setInputCity('')
	}

	return (
		<form
			className={styles.search}
			onSubmit={e => {
				e.preventDefault()
				handleSearch()
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
					value={inputCity}
					onChange={e => {
						setInputCity(e.target.value)
					}}
					placeholder='Search City...'
				/>
			</div>
			<button
				className={styles.button_search}
				type='submit'
				disabled={!inputCity.trim()}
			>
				Get Weather
			</button>
		</form>
	)
}

export default SearchForm
