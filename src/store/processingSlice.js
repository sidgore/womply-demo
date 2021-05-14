import { createSlice } from '@reduxjs/toolkit'

export const processingSlice = createSlice({
	name: 'processing',
	initialState: 'READY',
	reducers: {
		setProcessingStatus: (state, action) => {
			return action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setProcessingStatus } = processingSlice.actions

export default processingSlice.reducer
