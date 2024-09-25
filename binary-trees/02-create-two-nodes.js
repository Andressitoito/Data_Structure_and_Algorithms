/* Your task is to:

Create two nodes with different values (e.g., 20 and 30).
Print both nodes to check their properties. */

function TreeNode (val) {
 this.val = val
 this.left = null
 this.right = null
}

let node_1 = new TreeNode(20)
let node_2 = new TreeNode(30)

console.log("node 1 ", node_1)
console.log("node 2 ", node_2)