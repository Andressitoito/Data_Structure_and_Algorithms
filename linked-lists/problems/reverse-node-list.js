/* Given a linked list, write a function to reverse the list. */
class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

///////////////////////////////////////
// REVERSE LIST WHILE
///////////////////////////////////////
var reverseList = function (head) {
	let prev = null;
	let currentNode = head;

	while (currentNode !== null) {
		let tempNode = currentNode.next;
		currentNode.next = prev;
		prev = currentNode;
		currentNode = tempNode;
	}

	console.log(prev);
	return prev;
};

const node_while = createLinkedList([1, 2, 3, 4, 5]);
reverseList(node_while);

///////////////////////////////////////
// REVERSE LIST RECURSION
///////////////////////////////////////
var reverseLinkedList = function (node, prev) {
	prev = prev === undefined ? null : prev;

	if (node === null) {
		console.log(prev);
		return prev;
	}

	let tempNode = node.next;
	node.next = prev;

	prev = node;
	node = tempNode;

	return reverseLinkedList(node, prev);
};

const node_recursion = createLinkedList([1, 2, 3, 4, 5]);
reverseLinkedList(node_recursion);

///////////////////////////////////////
// CREATE LINKED LIST
///////////////////////////////////////
function createLinkedList(head) {
	let node = new ListNode(0);
	let currentNode = node;

	for (let i = 0; i < head.length; i++) {
		currentNode.next = new ListNode(head[i]);
		currentNode = currentNode.next;
	}

	return node.next;
}
