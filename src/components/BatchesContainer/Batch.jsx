import React from 'react'
import styles from './BatchesContainer.module.scss'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { removeBatch } from '../../store/batchesSlice'
import { setProcessingStatus } from '../../store/processingSlice'

const selectedBatchTodos = createSelector(
	(state) => state.todos,
	(_, batch) => batch,
	(todos, batch) => {
		const myTodos = []

		for (let i = batch.start; i <= batch.end; i++) {
			const found = todos.find((item) => item.id === i)
			if (found) {
				myTodos.push(found)
			}
		}

		return myTodos
	}
)

export const Batch = ({ batch, batchIndex }) => {
	const todos = useSelector((state) => selectedBatchTodos(state, batch))
	const dispatch = useDispatch()

	const handleRemove = () => {
		dispatch(setProcessingStatus('PROCESSING'))
		dispatch(removeBatch(batchIndex))
		dispatch(setProcessingStatus('READY'))
	}

	return (
		<div className={styles.batch}>
			<div className={styles.batchHeader}>
				<h3>Batch {batchIndex + 1}</h3>
				<button onClick={handleRemove}>Remove</button>
			</div>

			<table style={{ width: '100%' }}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Todo</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>{todo.id}</td>
							<td>{todo.title}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
