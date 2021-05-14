import { useSelector } from 'react-redux'
export const ProcessingContainer = () => {
	const processingStatus = useSelector((state) => state.processing)
	return (
		<div>
			<h3>Current Status</h3>
			<p>{processingStatus}</p>
		</div>
	)
}
