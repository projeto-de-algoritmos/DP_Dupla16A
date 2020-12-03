function LIS(arr){
	var LISArr = [[]]
	arr.forEach((item, index) => {
		LISArr[index] = []
	})
	LISArr[0].push(arr[0])

	console.log(arr)
	for(var i = 1; i < arr.length; i++){
		for(var j = 0; j < i; j++){
			if(arr[j].levelMobs < arr[i].levelMobs && LISArr[j].length > LISArr[i].length)
				LISArr[i] = [...LISArr[j]]
		}
		LISArr[i].push(arr[i])
	}
	var j = 0;
	for(var i = 0; i < arr.length; i++)
		if(LISArr[j].length < LISArr[i].length)
			j = i
	console.log(LISArr[j])
	return LISArr[j]
}

export default LIS;
