import { useEffect, useRef } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { setCoords } from './citySlice'

export const useInitGeolocation = () => {
	const dispatch = useAppDispatch()
	const initRef = useRef(false)

	useEffect(() => {
		if (initRef.current) return
		initRef.current = true

		if (!navigator.geolocation) {
			console.log('Geolocation is not supported by your browser')
			dispatch(setCoords(null))
			return
		}

		navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords
				dispatch(setCoords({ latitude, longitude }))
			},
			error => {
				console.warn('Geolocation error:', error.message)
			},
			{
				enableHighAccuracy: false,
				timeout: 5000,
			}
		)
	}, [dispatch])
}
