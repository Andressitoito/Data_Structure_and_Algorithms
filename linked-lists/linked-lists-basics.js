///////////////////////////////////////
// CONSTRUCTOR FUNCTION
///////////////////////////////////////
function Student(name, age, value) {
	(this.name = name), (this.age = age), (this.value = value);
}
// Instances of the constructor function
let Andy = new Student("Andy", 36, 10);
let Jhon = new Student("Jhon", 33, 5);

///////////////////////////////////////
// SIMPLE LINKED LISTS
///////////////////////////////////////

///////////////////////////////////////
// CREATING LIST NODE FUNCTION
function createNode(value) {
	return {
		value: value,
		next: null,
	};
}

createNode("Hello"); // { value: 'Hello', next: null }

///////////////////////////////////////
// CREATING LIST NODE CLASS
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

let newNode = new Node("World");
console.log(newNode); // { value: 'World', next: null }

///////////////////////////////////////
// CREATING LINKED LIST CLASS
class LinkedList {
	constructor() {
		this.head - null;
		this.tail = null;
		this.length = 0;
	}

	insert(value) {
		this.length++;

		let newNode = createNode(value);

		if (this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
			return newNode;
		}

		this.head = this.tail = newNode;
		return newNode;
	}
}


