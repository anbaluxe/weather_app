import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../features/city/citySlice'
import favoritesReducer from '../features/favorites/favoritesSlice'
import historyReducer from '../features/history/historySlice'
import uiReducer from '../features/ui/uiSlice'
import { weatherApi } from '../services/weatherApi'

export const store = configureStore({
	reducer: {
		city: cityReducer,
		history: historyReducer,
		favorites: favoritesReducer,
		ui: uiReducer,
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(weatherApi.middleware),
})

let prevHistory: string | null = null
let prevFavorites: string | null = null

store.subscribe(() => {
	const state = store.getState()

	const currentHistory = JSON.stringify(state.history.items)
	const currentFavorites = JSON.stringify(state.history.favorites)

	localStorage.setItem('history', JSON.stringify(state.history.items))

	if (currentHistory !== prevHistory) {
		localStorage.setItem('history', currentHistory)
		prevHistory = currentHistory
	}

	if (currentFavorites !== prevFavorites) {
		localStorage.setItem('favorites', currentFavorites)
		prevFavorites = currentFavorites
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
