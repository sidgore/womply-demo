export const getValidBatch = (inputBatch) => {
	const returnObj = { start: undefined, end: undefined, error: undefined }
	let regex = '^[0-9]+-[0-9]+$'
	let error = ''

	const doesMatch = inputBatch.match(regex)
	if (!doesMatch) {
		returnObj.error = 'Enter valid parameters'
		return returnObj
	}
	console.log('doesMatch', doesMatch)

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

	//console.log('input', input)
	// if (start && end) {
	// 	console.log('start', start)
	// 	console.log('end', end)
	// }
}
