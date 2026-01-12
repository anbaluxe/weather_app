import FavoriteList from '../../components/FavoriteList/FavoriteList'
import HistoryList from '../../components/HistoryList/HistoryList'
import SearchForm from '../../components/SearchForm/SearchForm'
import WeatherBanner from '../../components/WeatherBanner/WeatherBanner'
import { useInitGeolocation } from '../../features/city/useInitGeolocation'
import styles from './style.module.css'

const Main = () => {
	useInitGeolocation()

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<SearchForm />
				<div className={styles.info}>
					<WeatherBanner />
					<HistoryList />
				</div>
				<FavoriteList />
			</div>
		</div>
	)
}

export default Main
