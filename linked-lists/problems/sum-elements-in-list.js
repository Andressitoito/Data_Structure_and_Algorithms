/* Given a linked list, write a function to find the sum of all the elements in the list. */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var sumElementsInList = function (head) {
	const list = createLinkedList(head)

 const sum = sumElements(list)

 console.log(sum)

 return sum
};

sumElementsInList([1, 2, 3, 4, 5]);

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

function sumElements(list, sum) {
	sum = sum === undefined ? 0 : sum * 1;

	sum += list.val;

	if (list.next === null) {
		return sum;
	}

	return sumElements(list.next, sum);
}

const node = createLinkedList([1, 2, 3, 4, 5]);

sumElements(node);
