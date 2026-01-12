export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}
	return date.toLocaleDateString('en-US', options)
}

export const formatTime = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	}
	return date.toLocaleTimeString('en-US', options)
}
