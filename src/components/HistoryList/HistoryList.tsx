import { useAppSelector } from '../../app/hooks'
import { HistoryItems } from './HistoryItem'

const HistoryList = () => {
	const historyList = useAppSelector(state => state.history.items)
	const historyListSlice = historyList.slice(0, 4)

	return (
		historyListSlice.length > 0 && (
			<HistoryItems historyListSlice={historyListSlice} />
		)
	)
}

export default HistoryList
