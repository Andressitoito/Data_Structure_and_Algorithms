/* Write a JavaScript function that takes a matrix as input and calculates the sum of all its elements. */
var sumAllElementsInMatrix = function (matrix) {
	let sum = 0;

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			sum += matrix[i][j];
		}
	}

	console.log(sum);
	return sum;
};

sumAllElementsInMatrix([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
