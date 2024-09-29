/* Your task is to:

Create two nodes (20 and 30).
Link the second node as the right child of the first node.
Print the parent node to check the result. */

function TreeNode (val) {
 this.val = val
 this.left = null
 this.right = null
}

let parentNode = new TreeNode(20)
let childNode = new TreeNode(30)

parentNode.right = childNode

console.log("parentNode ", parentNode)


