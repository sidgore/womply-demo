export const getValidBatch = (inputBatch) => {
	const returnObj = { start: undefined, end: undefined, error: undefined }
	let regex = '^[0-9]+-[0-9]+$'

	const doesMatch = inputBatch.match(regex)
	if (!doesMatch) {
		returnObj.error = 'Enter valid parameters'
		return returnObj
	}

	let [start, end] = inputBatch.split('-')

	start = parseInt(start)
	end = parseInt(end)
	if (start >= end) {
		returnObj.error = 'Enter valid parameters'
		return returnObj
	}

	returnObj.start = parseInt(start)
	returnObj.end = parseInt(end)
	return returnObj
}

export const fetchToDo = async (id) => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

		if (res.status === 200) {
			const result = await res.json()
			return result
		}
		if (res.status === 404) {
			return { id, title: 'Record Not Found', completed: 'Cancelled' }
		}
	} catch (error) {
		console.log('error', error)
	}
}
