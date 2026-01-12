import { useAppSelector } from './app/hooks'
import History from './pages/History/History.tsx'
import Main from './pages/Main/Main.tsx'

function App() {
	const viewMode = useAppSelector(state => state.ui.viewMode)
	return viewMode === 'all' ? <Main /> : <History />
}

export default App
