///////////////////////////////////////
// FIBONACCI SEQUENCE
///////////////////////////////////////
/* Problem: Given a number 'n', where the first 'n' elements of the Fibonacci sequence */
function Fibonacci(n) {
	const fib = [0, 1];

	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib;
}

Fibonacci(4);

// Big-O = O(n) Linear Time Complexity

///////////////////////////////////////
// FACTORIAL OF A NUMBER
///////////////////////////////////////
/* Problem: Given an integer 'n', find the factorial of that integer */
function factorial(n) {
	let facto = 1;

	let arr = [];
	while (n > 0) {
		if (n < 1) {
			break;
		} else {
			arr.push(n);

			n = n - 1;
		}
	}

	arr.forEach((element) => {
		facto = facto * element;
	});

	console.log(facto);
}
// factorial(1);

function Factorial(n) {
	let result = 1;

	for (let i = 2; i <= n; i++) {
		result = result * i;
	}

	console.log(result);
}

// Factorial(5)

// Big-O = O(n) Linear Time Complexity

///////////////////////////////////////
// PRIME NUMBER
///////////////////////////////////////
/* Problem - Give a natural number 'n', determine if the number is prime or not */
function isPrime(n) {
	if (n < 2) {
		return false;
	}

	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			console.log(false);
			return false;
		}
	}
	console.log(true);

	return true;
}

// isPrime(1);
// console.time("isPrimeTimer");
// isPrime(2301);
// console.timeEnd("isPrimeTimer");

// Big-O = O(n) Linear Time Complexity

// OPTIMIZED PRIMALITY TEST
/* Integers larger than the square root do not need to be checked because, whenever 'n = a * b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n' */
function isPrimeOptimized(n) {
	if (n < 2) {
		return false;
	}

	for (let i = 2; i < Math.sqrt(n); i++) {
		if (n % i === 0) {
			console.log(false);
			return false;
		}
	}
	console.log(true);
	return true;
}

// console.time("Optimized");
// isPrimeOptimized(2301);
// console.timeEnd("Optimized");

// Big-O = O(sqrt(n)) Square Root Time Complexity

