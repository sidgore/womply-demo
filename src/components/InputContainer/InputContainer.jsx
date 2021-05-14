import React from 'react'
import styles from './InputContainer.module.scss'
import { FetchTimeContainer } from '../FetchTimeContainer/FetchTimeContainer'
import { useSelector, useDispatch } from 'react-redux'
import { pushToDo } from '../../store/todosSlice'
import { pushBatch } from '../../store/batchesSlice'
import { setProcessingStatus } from '../../store/processingSlice'
import { getValidBatch } from '../../helpers/helpers'

const PROCESSING = 'PROCESSING'
const READY = 'READY'

export const InputContainer = () => {
	const [inputBatch, setInputBatch] = React.useState('')
	const [start, setStart] = React.useState()
	const [end, setEnd] = React.useState()

	const [error, setError] = React.useState('')
	const todos = useSelector((state) => state.todos)
	const dispatch = useDispatch()

	const fetchToDo = async () => {
		const { start, end, error } = getValidBatch(inputBatch)

		console.log(start, end, error)
		setError(error)
		setStart(start)
		setEnd(end)

		if (!error) {
			let t0 = performance.now()

			dispatch(setProcessingStatus(PROCESSING))

			for (let i = start; i <= end; i++) {
				const found = todos.findIndex((todo) => todo.id === i)

				if (found === -1) {
					const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)

					const result = await res.json()

					dispatch(pushToDo(result))
				}
			}
			let t1 = performance.now()
			const batch = { start, end, time: t1 - t0 }
			dispatch(pushBatch(batch))
			dispatch(setProcessingStatus(READY))
		}
	}

	const handleChange = (e) => {
		setInputBatch(e.target.value)
	}
	return (
		<div style={{ width: '100%' }}>
			<h2>Range of TODOS to fetch</h2>
			<div className={styles.inputRow}>
				<input
					className={styles.inputBox}
					type='text'
					name='inputBatch'
					placeholder='e.g 1-5'
					onChange={handleChange}
					value={inputBatch}
				/>
				<button onClick={fetchToDo}>Fetch</button>
			</div>
			<p className={styles.error}>{error}</p>

			<p>Only this format should be allowed</p>
			<p>1-5</p>
			<p>10-45</p>

			<FetchTimeContainer />
		</div>
	)
}
