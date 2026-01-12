import FavoriteList from '../../components/FavoriteList/FavoriteList'
import HistoryList from '../../components/HistoryList/HistoryList'
import SearchForm from '../../components/SearchForm/SearchForm'
import WeatherBanner from '../../components/WeatherBanner/WeatherBanner'
import { useInitGeolocation } from '../../features/city/useInitGeolocation'

const Main = () => {
	useInitGeolocation()

	return (
		<>
			<SearchForm />
			<WeatherBanner />
			<HistoryList />
			<FavoriteList />
		</>
	)
}

export default Main
