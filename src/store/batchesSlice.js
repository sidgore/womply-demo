import { createSlice } from '@reduxjs/toolkit'

export const batchesSlice = createSlice({
	name: 'batches',
	initialState: [],
	reducers: {
		removeBatch: (state, action) => {
			console.log('payload', action.payload)

			return state.filter((item, index) => index !== action.payload)
		},

		pushBatch: (state, action) => {
			state.push(action.payload)
		},
	},
})

// Action creators are generated for each case reducer function
export const { removeBatch, pushBatch } = batchesSlice.actions

//export const selectCount = (state) => state.counter.value

export default batchesSlice.reducer
