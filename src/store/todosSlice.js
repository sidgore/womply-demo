import { createSlice } from '@reduxjs/toolkit'
import { setProcessingStatus } from './processingSlice'
import { pushBatch } from './batchesSlice'

export const todosSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		pushToDo: (state, action) => {
			state.push(action.payload)
		},
	},
})

export const fetchToDos = () => async (dispatch, getState) => {
	//dispatch(setProcessingStatus('HELLO'))

	const { todos, processing } = getState()
	let t0 = performance.now()

	for (
		let i = processing.start;
		i <= processing.end && getState().processing.status !== 'READY';
		i++
	) {
		const found = todos.findIndex((todo) => todo.id === i)

		if (found === -1) {
			const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)

			const result = await res.json()

			dispatch(pushToDo(result))
		}
	}
	let t1 = performance.now()
	const batch = { start: processing.start, end: processing.end, time: t1 - t0 }
	dispatch(pushBatch(batch))
	dispatch(setProcessingStatus('READY'))
}

// Action creators are generated for each case reducer function
export const { pushToDo } = todosSlice.actions

export default todosSlice.reducer
