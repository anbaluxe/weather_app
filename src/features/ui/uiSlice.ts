import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ViewMode } from './viewTypes'

interface UiState {
	viewMode: ViewMode
}

const initialState: UiState = {
	viewMode: 'all',
}
const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setViewMode(state, action: PayloadAction<ViewMode>) {
			state.viewMode = action.payload
		},
	},
})

export const { setViewMode } = uiSlice.actions
export default uiSlice.reducer
