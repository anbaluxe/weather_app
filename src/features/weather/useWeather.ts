import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useGetWeatherByCityQuery } from '../../services/weatherApi'
import { useCityQuery } from '../city/useCityQuery'
import {
	removeFromFavorites,
	setFavorites,
	setHistory,
} from '../history/historySlice'

export const useWeather = () => {
	const query = useCityQuery()

	const {
		data: weather,
		error,
		isLoading,
	} = useGetWeatherByCityQuery(query ?? '', {
		skip: !query,
	})

	const favorites = useAppSelector(state => state.history.favorites)
	const dispatch = useAppDispatch()

	const cityName = weather?.city

	const isFavorite = favorites.some(item => item.city === cityName)
	const historyItem = useAppSelector(state =>
		state.history.items.find(item => item.city === cityName)
	)

	const canToggleFavorite = Boolean(historyItem)
	const toggleFavorite = () => {
		if (!historyItem) return
		isFavorite
			? dispatch(removeFromFavorites(historyItem.city))
			: dispatch(setFavorites(historyItem))
	}

	useEffect(() => {
		if (!weather) return

		dispatch(
			setHistory({
				city: weather.city,
				temp: weather.temperature,
				img: weather.icon,
				id: Date.now(),
				createdAt: Date.now(),
			})
		)
	}, [weather, dispatch])

	return {
		query,
		weather,
		error,
		isLoading,
		isFavorite,
		canToggleFavorite,
		toggleFavorite,
	}
}
