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

///////////////////////////////////////
// POWER OF TWO
///////////////////////////////////////
/* Problem: Given a positive integer 'n', determine if the number 'n' is a power of 2 or not. An integer is a power of two if there exists an integer 'x' such that 'n' === 2 ^ x */
function power2(n) {
	if (n === 0) {
		return true;
	}

	if (n % 2 !== 0) {
		return false;
	}

	let power = 1;

	while (power <= n) {
		power = power * 2;

		if (power === n) {
			console.log(true);
			return true;
		}
	}
	console.log(false);
	return false;
}
/* console.time("power2");
power2(131072);
console.timeEnd("power2");
 */
function power2Optimized(n) {
	if (n === 0) {
		console.log(true);
		return 1;
	}

	if (n % 2 !== 0) {
		console.log(false);
		return false;
	}

	n = n / 2;

	let power = 1;

	while (power <= n) {
		power = power * 2;

		if (power === n) {
			console.log(true);
			return true;
		}
	}

	console.log(false);
	return false;
}
/* console.time("power2Optimized");
power2Optimized(131072);
console.timeEnd("power2Optimized");
 */
function isPowerOfTwo(n) {
	if (n < 1) {
		console.log(false);
		return false;
	}
	while (n > 1) {
		if (n % 2 !== 0) {
			console.log(false);
			return false;
		}
		n = n / 2; // REDUCING VALUE OF N BY HALF
	}
	console.log(true);
	return true;
}

// isPowerOfTwo(4);

// Big-O = O(logn) - O logn n Time Complexity (Because the reduction by half the value of n in each loop)

function isPowerOfTwoBitWise(n) {
	if (n < 1) {
		return false;
	}

	return (n & (n - 1)) === 0;
}

// Big-O = O(1) Constant

///////////////////////////////////////
// FIBONACCI SEQUENCE USING RECURSION
///////////////////////////////////////
/* Problem: Given a number 'n', where the first 'n' elements of the Fibonacci sequence */
function recursiveFibonacci(n) {
	if (n < 2) {
		return n;
	}
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

recursiveFibonacci(4);

// Big-O = O(2^n) - Exponential Time Complexity

///////////////////////////////////////
// FACTORIAL OF A NUMBER USING RECURSION
///////////////////////////////////////
/* Problem: Given an integer 'n', find the factorial of that integer */
function recursiveFactorial(n, facto) {
	facto = facto ?? 1;
	if (n === 0) {
		console.log(facto);
		return 1;
	}
	if (n < 2) {
		console.log(facto);
		return facto;
	}

	facto = n * facto;

	return recursiveFactorial(n - 1, facto);
}

recursiveFactorial(4);

function recursiveFactorialOptimized(n) {
	if (n === 0) {
		return 1;
	}

	return n * recursiveFactorialOptimized(n - 1);
}

// Big-O = O(n) Linear Time Complexity


