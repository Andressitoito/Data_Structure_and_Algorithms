/* Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.

For example, given the linked list 1 -> 4 -> 3 -> 2 -> 5 -> 2 and x = 3, your function should return the partitioned list as 1 -> 2 -> 2 -> 4 -> 3 -> 5. */
function ListNode(val, next) {
	this.val = val === undefined ? null : val;
	this.next = next === undefined ? null : next;
}

///////////////////////////////////////
// PARTITION LINKED LIST
///////////////////////////////////////
var partitionLinkedList = function (head, x) {
	let node = head;
	let partitionA = new ListNode(0);
	let currentA = partitionA;
	let partitionB = new ListNode(0);
	let currentB = partitionB;

	while (node !== null) {
		if (node.val < x) {
			currentA.next = new ListNode(node.val);
			currentA = currentA.next;
		} else {
			currentB.next = new ListNode(node.val);
			currentB = currentB.next;
		}

		node = node.next;
	}

	partitionA = partitionA.next;
	partitionB = partitionB.next;

	let answer = new ListNode(0);
	let current = answer;

	while (true) {
		if (partitionA.next !== null) {
			current.next = partitionA;
			current = current.next;
			partitionA = partitionA.next;
		} else {
			partitionA.next = partitionB;
			break;
		}
	}

	answer = answer.next;
 
	helperLogValues(head);
	helperLogValues(answer);

	return answer;
};

const node = createLinkedList([1, 4, 3, 2, 5, 2]);
partitionLinkedList(node, 3);

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

///////////////////////////////////////
// HELPER LOG VALUES
///////////////////////////////////////
function helperLogValues(node) {
	const values = [];

	while (node !== null) {
		values.push(node.val);

		node = node.next;
	}

	console.log(values);
}
