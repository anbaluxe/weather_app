import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Weather } from '../features/weather/weatherTypes'
import { WeatherApiResponse } from './weatherApi.types'

const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: builder => ({
		getWeatherByCity: builder.query<Weather, string>({
			query: city =>
				`current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&lang=en`,
			transformResponse: (response: WeatherApiResponse): Weather => {
				return {
					city: response.location.name,
					temperature: response.current.temp_c,
					icon: response.current.condition.icon,
					description: response.current.condition.text,
				}
			},
		}),
	}),
})

export const { useGetWeatherByCityQuery } = weatherApi
