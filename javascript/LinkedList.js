/* realize a LinkedList */

function Node(element) {
	this.element = element;
	this.next = null;
}

function LinkedList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevNode = findPrevNode;
	this.remove = remove;
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		if (currNode.next === null) {
			return false;
		} else {
			currNode = currNode.next;
		}
	}
	return currNode;                                                                                                                                                                                                             
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function display() {
	var currNode = this.head;
	if (currNode.next !== null) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

function findPrevNode(item) {
	var currNode = this.head;
	while(currNode..next.element != item) {
		if (currNode.next.next === null) {
			return false;
		} else {
			currNode = currNode.next;
		}
	}
	return currNode;  
}

function remove(item) {
	var prevNode = this.findPrevNode(item);
	if (prevNode.next.next !== null) {
		prevNode.next = prevNode.next.next;
	} else {
		prevNode.next = null;
	}
}


