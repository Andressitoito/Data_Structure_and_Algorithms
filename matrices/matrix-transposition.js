///////////////////////////////////////
// MATRIX TRANSPOSITION
///////////////////////////////////////
/* 
Matrix transposition involves interchanging rows and columns of a matrix. It's like flipping the matrix over its main diagonal. If you have an m x n matrix, its transpose will be an n x m matrix.

Theory:

To transpose a matrix, you need to swap elements across the main diagonal. The element at row i and column j in the original matrix will be placed at row j and column i in the transposed matrix. So, for a given element matrix[i][j], it should become transposed[j][i] in the new matrix.
Here's a visual representation of a matrix and its transpose:
*/

// Original Matrix:

[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

// Transposed Matrix:

[[1, 4, 7],
[2, 5, 8],
[3, 6, 9]]
