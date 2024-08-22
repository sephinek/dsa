const DoublyLinkedList = require('./doubly-linked-list-implementation');

const list = new DoublyLinkedList();

list.append(200);
list.append(300);
list.append(400);
list.append(500);
list.prepend(100);

list.insertAt(1, 'NEW');

// console.log(list.get(1).data);

list.remove(0);
console.log(list.contains(500));
console.log(list.contains(100));

// list.printAll();
