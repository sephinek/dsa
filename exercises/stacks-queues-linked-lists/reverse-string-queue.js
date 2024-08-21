const Queue = require('./queue-implementation');

function reverseStringQueue(str) {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reversedString = '';

  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
}

console.log(reverseStringQueue('Hello'));
console.log(reverseStringQueue('12345'));
console.log(reverseStringQueue('JavaScript'));
