/* Your task is to implement a function that takes a linked list as input and returns true if the linked list is a palindrome, and false otherwise. */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
///////////////////////////////////////
// CHECK PALINDROME
///////////////////////////////////////
var isPalindrome = function (head) {
	let node = createLinkedList(head);
	const arr_values = [];

	while (node.next !== null) {
		arr_values.push(node.val);

		if (node.next.next === null) {
			arr_values.push(node.next.val);
		}
		node = node.next;
	}

	console.log(arr_values);

	if (checkPalindrome(arr_values)) {
		console.log(true);
		return;
	} else {
		console.log(false);
		return false;
	}
};

isPalindrome([1, 2, 3, 2, 1]);

///////////////////////////////////////
// CREATE LINKED LIST
///////////////////////////////////////
function createLinkedList(head) {
	let node = new ListNode(0);
	let currentNode = node;

	for (let i = 0; i < head.length; i++) {
		let newNode = new ListNode(head[i]);
		currentNode.next = newNode;
		currentNode = newNode;
	}

	return node.next;
}

///////////////////////////////////////
// HELPER ARRAY PALINDROME FUNCTION
///////////////////////////////////////
function checkPalindrome(arr) {
	return arr.join("") === arr.reverse().join("");
}
