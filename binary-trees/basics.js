///////////////////////////////////////
// BASIC BINARY TREES

/* Implement a function to insert a node into a binary tree. */
 function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

function insertNode(root, node) {
  if (root === null) return root;

  if (node.val < root.val) {
    root.left = insertNode(root.left, node);
  } else if (node.val > root.val) {
    root.right = insertNode(root.right, node);
  }

  console.log(root)
  return root;
}

insertNode(root, node1);
insertNode(root, node1);
console.log(root)



