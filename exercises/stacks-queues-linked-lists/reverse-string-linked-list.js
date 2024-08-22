const { LinkedList } = require('./linked-list-implementation.js');

function reverseStringLinkedList(str) {
  const list = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let reversedString = '';

  let current = list.head;

  while (current !== null) {
    reversedString += current.data;
    current = current.next;
  }

  return reversedString;
}

console.log(reverseStringLinkedList('hello'));
console.log(reverseStringLinkedList('Howdy'));
console.log(reverseStringLinkedList('Greetings from Earth'));
