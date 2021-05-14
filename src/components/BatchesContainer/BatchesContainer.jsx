import React from 'react'
import { useSelector } from 'react-redux'
import { Batch } from './Batch'
import styles from './BatchesContainer.module.scss'
export const BatchesContainer = () => {
	const batches = useSelector((state) => state.batches)

	return (
		<div className={styles.container}>
			{batches.map((batch, index) => (
				<Batch key={index} batch={batch} batchIndex={index} />
			))}
		</div>
	)
}
