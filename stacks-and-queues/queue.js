class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

    const holdingPointer = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = holdingPointer.next;
    }

    this.length--;
    return holdingPointer;
  }
}

const myQueue = new Queue();
myQueue.enqueue('1');
myQueue.enqueue('2');
myQueue.enqueue('3');
myQueue.enqueue('4');
console.log(myQueue.dequeue());

console.log(myQueue.peek());

console.log(myQueue);
