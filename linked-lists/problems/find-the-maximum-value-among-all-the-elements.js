/* Given a linked list, write a function to find the maximum value among all the elements in the list. */
class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
///////////////////////////////////////
// FIND MAXIMUM VALUE
///////////////////////////////////////
var findMaximumValue = function (head) {
	let node = createLinkedList(head);

	let maximum = 0;

	while (node !== null) {
		if (node.val > maximum) {
			maximum = node.val;
		}

		node = node.next;
	}

	console.log(maximum);

	return maximum;
};

findMaximumValue([2, 3, 4, 5, 6]);

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
