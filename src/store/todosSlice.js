import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		pushToDo: (state, action) => {
			state.push(action.payload)
		},
	},
})

// Action creators are generated for each case reducer function
export const { pushToDo } = todosSlice.actions

export default todosSlice.reducer
