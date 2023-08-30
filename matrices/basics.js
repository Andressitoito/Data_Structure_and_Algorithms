///////////////////////////////////////
// MATRICES
///////////////////////////////////////
/*
A matrix is a two-dimensional array of numbers arranged in rows and columns. In JavaScript, you can represent a matrix using nested arrays. For instance, your example matrix can be represented as:

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Each inner array represents a row in the matrix, and the elements within those arrays represent the values in each column of that row.

Basic Matrix Operations:
You can perform various operations on matrices, such as addition, subtraction, multiplication, and more. Before diving into complex operations, let's start with something simpler, like accessing values from the matrix:

To access an element in the matrix, you use the row and column indices. For instance, to access the element in the second row and third column (which is 6 in your example matrix), you'd use:
*/

const element = matrix[1][2]; // Row 2, Column 3
