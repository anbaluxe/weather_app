import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { HistoryItem } from './historyTypes'

interface HistoryState {
	items: HistoryItem[]
	favorites: HistoryItem[]
}

const savedHistory = localStorage.getItem('history')
const savedFavorites = localStorage.getItem('favorites')

const initialState: HistoryState = {
	items: savedHistory ? JSON.parse(savedHistory) : [],
	favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
}

const historySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {
		setHistory(state, action: PayloadAction<HistoryItem>) {
			state.items = state.items.filter(
				item => item.city !== action.payload.city
			)
			state.items.unshift(action.payload)
			state.items = state.items.slice(0, 10)
		},
		setFavorites(state, action: PayloadAction<HistoryItem>) {
			const favorite = state.favorites.find(
				item => item.city === action.payload.city
			)

			if (!favorite) {
				state.favorites.unshift(action.payload)
			}
		},
		removeFromFavorites(state, action: PayloadAction<string>) {
			state.favorites = state.favorites.filter(
				item => item.city !== action.payload
			)
		},
		clearHistory(state) {
			state.items = []
		},
	},
})

export const { setHistory, clearHistory, setFavorites, removeFromFavorites } =
	historySlice.actions
export default historySlice.reducer
