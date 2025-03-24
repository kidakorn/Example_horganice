function calculateAverage(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++){
		sum += numbers[i];
	}
	let average = sum / numbers.length;
	return average;
}

let result = calculateAverage([10, 20, 30, 40, 50]);
console.log(result);