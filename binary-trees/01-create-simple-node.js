/* Your task is to create a simple node that holds a value. The node will have three properties:

val: The value stored in the node.
left: A link to the left child (which we'll set to null for now).
right: A link to the right child (which we'll also set to null for now). */

function TreeNode(val) {
 this.val = val;
 this.left = null;
 this.right = null;
}

let node = new TreeNode(10)

console.log("node", node)
