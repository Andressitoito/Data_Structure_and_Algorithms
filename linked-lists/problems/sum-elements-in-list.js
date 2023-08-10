/* Given a linked list, write a function to find the sum of all the elements in the list. */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var sumElementsInList = function (head) {
	const node = createLinkedList(head);

	const sum = sumElementsRecursive(node);

	console.log(sum);

	return sum;
};

sumElementsInList([1, 2, 3, 4, 5]);

///////////////////////////////////////
// CREATE LINKED LIST
///////////////////////////////////////
function createLinkedList(head) {
	let node = new ListNode(0);
	let currentNode = node;

	for (let i = 0; i < head.length; i++) {
		const newNode = new ListNode(head[i]);
		currentNode.next = newNode;
		currentNode = newNode;
	}

	return node.next;
}

createLinkedList([1, 2, 3, 4, 5]);

///////////////////////////////////////
// RECURSION SUM
///////////////////////////////////////
function sumElementsRecursive(node, currentSum = 0) {
	currentSum = Number(currentSum);

	currentSum += node.val;

	if (node.next === null) {
		return currentSum;
	}

	return sumElements(node.next, currentSum);
}
///////////////////////////////////////
// WHILE SUM
///////////////////////////////////////
function sumElementsWhile(node) {
	let current = node;
	let sum = 0;

	while (current !== null) {
		sum += node.val;
		current = current.next;
	}

	return sum;
}

const node = createLinkedList([1, 2, 3, 4, 5]);

sumElementsWhile(node);
