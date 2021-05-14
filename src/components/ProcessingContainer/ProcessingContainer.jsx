import { useSelector } from 'react-redux'
import styles from './ProcessingContainer.module.scss'
export const ProcessingContainer = () => {
	const processingStatus = useSelector((state) => state.processing.status)
	return (
		<div>
			<h3>Current Status</h3>
			<p className={processingStatus === 'READY' ? styles.ready : styles.processing}>
				{processingStatus}
			</p>
		</div>
	)
}
