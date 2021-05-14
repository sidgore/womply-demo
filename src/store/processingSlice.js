import { createSlice } from '@reduxjs/toolkit'

export const processingSlice = createSlice({
	name: 'processing',
	initialState: { status: 'READY', start: undefined, end: undefined, error: '' },
	reducers: {
		setProcessingStatus: (state, action) => {
			state.status = action.payload
		},
		setStart: (state, action) => {
			state.start = action.payload
		},
		setEnd: (state, action) => {
			state.end = action.payload
		},
		setError: (state, action) => {
			state.error = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setProcessingStatus, setStart, setEnd, setError } = processingSlice.actions

export default processingSlice.reducer
