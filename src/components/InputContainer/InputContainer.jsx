import React from 'react'
import styles from './InputContainer.module.scss'
import { FetchTimeContainer } from '../FetchTimeContainer/FetchTimeContainer'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToDos } from '../../store/todosSlice'
import {
	setProcessingStatus,
	setStart,
	setEnd,
	setError,
} from '../../store/processingSlice'
import { getValidBatch } from '../../helpers/helpers'

const PROCESSING = 'PROCESSING'

export const InputContainer = () => {
	const [inputBatch, setInputBatch] = React.useState('')
	const dispatch = useDispatch()
	React.useEffect(() => {
		if (inputBatch.length) {
			const { start: startTmp, end: endTmp, error: errorTmp } = getValidBatch(inputBatch)

			dispatch(setStart(startTmp))
			dispatch(setEnd(endTmp))
			dispatch(setError(errorTmp))
		}
	}, [inputBatch, dispatch])

	const error = useSelector((state) => state.processing.error)

	const handleFetch = () => {
		if (!error) {
			dispatch(setProcessingStatus(PROCESSING))
			dispatch(fetchToDos())
		}
	}

	const handleChange = (e) => {
		setInputBatch(e.target.value)
	}

	const handleCancel = () => {
		dispatch(setProcessingStatus('READY'))
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
				<button onClick={handleFetch}>Fetch</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
			<p className={styles.error}>{error}</p>

			<p>Only this format should be allowed</p>
			<p>1-5</p>
			<p>10-45</p>

			<FetchTimeContainer />
		</div>
	)
}
