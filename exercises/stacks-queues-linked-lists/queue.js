const Queue = require('./queue-implementation');

const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

queue.dequeue();

console.log(queue.peek());
// console.log(queue);
