/* Given a linked list, write a function to count the number of nodes in the list. */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var countNumberOfNodes = function (head) {
	const list = createLinkedList(head);

	///////////////////////////////////////
	// WHILE COUNT
	///////////////////////////////////////
	// let count = 0;
	// let currentNode = list;

	// while (currentNode !== null) {
	// 	count++;
	// 	currentNode = currentNode.next;
	// }

	///////////////////////////////////////
	// RECURSION COUNT
	///////////////////////////////////////
	function countNodes(list, count) {
		if (list === null) {
			return count;
		}

		count++;
		return countNodes(list.next, count);
	}

	let nodeCount = countNodes(list, 0);

	console.log("count", nodeCount);

	return nodeCount;
};

countNumberOfNodes([1, 2, 3, 4, 5]);

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

	console.log(node.next)
	return node.next;
}
