/* Your task is to:

Create three nodes with values 10, 20, and 30.
Set the node with value 10 as the left child of the node with value 20.
Set the node with value 30 as the right child of the node with value 20.
Print the parent node to check the result. */

function TreeNode(val, left, right) {
 this.val = val === undefined ? 0 : val
 this.left = left === undefined ?  null : left
 this.right = right === undefined ? null: right
}

let parentNode = new TreeNode(10)
let leftChild = new TreeNode(20)
let rightChild = new TreeNode(30)

parentNode.left = leftChild
parentNode.right = rightChild

console.log("parentNode ", parentNode)