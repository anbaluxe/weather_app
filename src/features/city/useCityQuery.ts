import { useAppSelector } from '../../app/hooks'

export const useCityQuery = (): string | null => {
	const { cityName, coords } = useAppSelector(state => state.city)

	if (cityName) {
		return cityName
	}
	if (coords) {
		return `${coords.latitude},${coords.longitude}`
	}
	return null
}
