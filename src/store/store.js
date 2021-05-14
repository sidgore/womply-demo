import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import batchesSlice from './batchesSlice'
import processingSlice from './processingSlice'

export default configureStore({
	reducer: {
		todos: todosSlice,
		batches: batchesSlice,
		processing: processingSlice,
	},
	devTools: true,
})
