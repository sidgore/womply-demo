import React from 'react'
import styles from './Batch.module.scss'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { removeBatch } from '../../../store/batchesSlice'
import { setProcessingStatus } from '../../../store/processingSlice'

const selectedBatchTodos = createSelector(
	(state) => state.todos,
	(_, batch) => batch,
	(todos, batch) => {
		const myTodos = []

		for (let i = batch.start; i <= batch.end; i++) {
			const found = todos.find((item) => item.id === i)
			if (found) {
				myTodos.push(found)
			} else
				myTodos.push({
					id: i,
					title: 'User Cancelled the operation',
					completed: 'Cancelled',
				})
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
							<td
								className={
									todo.completed === 'Cancelled'
										? styles.cancelled
										: todo.completed === true
										? styles.complete
										: styles.incomplete
								}>
								{todo.title}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
