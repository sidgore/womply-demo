import styles from './FetchTimeContainer.module.scss'
import { useSelector } from 'react-redux'
export const FetchTimeContainer = () => {
	const batches = useSelector((state) => state.batches)
	if (!batches.length) return null

	return (
		<div className={styles.container}>
			{batches.map((batch, index) => (
				<p key={index}>
					Fetched {batch.start}-{batch.end} took {batch.time} ms
				</p>
			))}
		</div>
	)
}
