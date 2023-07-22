/* 
///////////////////////////////////////
// ALGORITHMS BASICS
///////////////////////////////////////
An algorithms must have well defined inputs and outputs
Each step should be clear and unambiguous
Must be language independent

///////////////////////////////////////
// TIME AND SPACE COMPLEXITY
///////////////////////////////////////
We evaluate the performance of an algorithm in terms of its input size

Time complexity:
Is the amount of time taken by an algorithm to run, as a function of input size
Space complexity:
Is the amount of space taken by an algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropiate.

///////////////////////////////////////
// HOW TO REPRESENT COMPLEXITY
///////////////////////////////////////
Usyng Asymptotic notations, we use Matematical tools to represent time and space complexity

1- Big-O Notation (O-notation) - Worst case complexity
2- Omega Notation (Omega-notation) - Best case complexity
3- Theta Notation (Theta-notation) - Average case complexity

///////////////////////////////////////
// BIG-O NOTATION
///////////////////////////////////////
Big-O notation describes the complexity of an algorithm using algebraic terms

It has two important characteristics
- It is expressed in terms of the input
- It focuses on the bigger picture without getting caught up in the minute details

///////////////////////////////////////
// BIG-O NOTATION COMPLEXITY
*/
function summation(n) {
 let sum = 0;
 for (let i = 1; i < n; i++) {
  sum += i;
 }
 return sum;
}
/* 
summation(4) // 10

We cannot count the absolute running time of an algorithm and hence that cannot the time complexity.
Instead we count the number of times a statement executes based on the input size

This program has three main statements to execute*/

// For n = 4 lets count executions
function summation(n) {
 let sum = 0; // FIRST executes 1 time
 for (let i = 1; i < n; i++) {
  // PAYING ATTENTION that the for loop es JUST A REPETITION of the statement sum+=i
  sum += i; // SECOND executes 4 times
 }
 return sum; // LAST executes 1 time
}
/* 
Then we can say that total count is 4 + 2, and we can generalize it to n + 2.
Were n is the input size, out time complexity is dependent in the input size.

Big O it is expressed in terms of the input. Also focuses on the bigger picture without getting caught up in the minute details

n = 100   100 + 2
..
...
n = 100000000  100000000 + 2 

At this point we can actually drop it, n + 2 can approximately to just n, since n contribute most to the value and not the + 1 or + 5 etc. We dont have to get caught up in the smaller steps
n + 2 => n

Time Complexity
0(n) - Linear : Linear Time complexity, as the size of the n increases the time complexity also increases.

Every time we see a loop most of the times we can say that the time complexity is linear.*/

function summation(n) {
 return (n * (n + 1)) / 2
}
/* Time complexity
O(1) - Constant : Constant time complexity, here there is only one line of execution*/

for (let i = 0; i < n; i++) {
 for (let j = 0; j < i; j++) {
  // some code
 }
}
/* Time Complexity
O(n^2) - Quadratic
3n^2 + 5n + 1 */

for (let i = 0; i < n; i++) {
 for (let j = 0; j < i; j++) {
  for (let k = 0; k < j; k++) {
   // some code
  }
 }
}
/* Time complexity
O(n^3) - Cubic */

/* If the input size reduces by half every iteration
Time Complexity
O(logn) - Logarithmic

Multiple algorithms exists for the same problem and there is no one right solution. Different algorithms work well unders different constraints.
The same algorithm with the same programming laguage can be implemented in different ways.
When writting programs at work, do not lose sight of the big picture. Rather than writing clever code, write code that is easy to read and mantain.

///////////////////////////////////////
// BIG-O OBJECTS
///////////////////////////////////////
An object is a collection of key value pairs.

Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)

Object.keys() - O(n)

Object.values() - O(n)

Object.entries() - O(n)

///////////////////////////////////////
// BIG-O ARRAYS
///////////////////////////////////////
An array is an ordered collection of values

Insert / remove at the end - O(1)
Insert / remove at the beginning - O(n) (because all indexes must be reasigned)
Access - O(1)
Search - O(n)
Push / pop - O(1)
shift / unshift / concat / slice / splice - O(n)
forEach / map / filter / reduce - O(n)
*/

