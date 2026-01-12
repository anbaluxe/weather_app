import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coords } from './cityTypes'

interface CityState {
	cityName: string | null
	coords: Coords
}

const initialState: CityState = {
	cityName: null,
	coords: null,
}

const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		setCityName(state, action: PayloadAction<string>) {
			state.cityName = action.payload
			state.coords = null
		},
		setCoords(state, action: PayloadAction<Coords>) {
			state.coords = action.payload
			state.cityName = null
		},
		clearCity(state) {
			state.cityName = null
			state.coords = null
		},
	},
})

export const { setCityName, setCoords, clearCity } = citySlice.actions
export default citySlice.reducer
