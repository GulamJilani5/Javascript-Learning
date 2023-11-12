/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// BINARY NUMBER IN A LINKED LIST
////////////////////////////
// Binary Number in a Linked List A binary number is represented as a series of Os and 1's.
// In this challenge, the series will be in the form of a singly-linked list. Each node instance,
// a LinkedListNode, has a value, data, and a pointer to the next node, next.
// Given a reference to the head of a singly-linked list, convert the binary number represented to a decimal number.
// Example Linked List binary -» 0 * nul Linked list corresponding to the binary number (0011010)[2]or (19)[10].
// Function Description Complete the function getNumber in the editor below.
// getNumber has the following parameter(s): binary: reference to the head of a
// singly-linked list of binary digits Returns: int: a (long integer)[10] representation of

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getNumber(binary) {
  if (!binary) {
    return 0; // Return 0 for an empty list
  }

  let decimal = 0;
  let currentNode = binary;

  while (currentNode) {
    decimal = decimal * 2 + currentNode.data; // Update the decimal value
    currentNode = currentNode.next; // Move to the next node
  }
  return decimal;
}

// Example usage:
const node1 = new LinkedListNode(0);
const node2 = new LinkedListNode(0);
const node3 = new LinkedListNode(1);
const node4 = new LinkedListNode(1);
const node5 = new LinkedListNode(0);
const node6 = new LinkedListNode(1);
const node7 = new LinkedListNode(0);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const binaryHead = node1;
const decimalValue = getNumber(binaryHead);
console.log(decimalValue); // Output: 26
