const Stack = require('./stack-implementation');

function reverseStringStack(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedString = '';

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

console.log(reverseStringStack('Hello'));
console.log(reverseStringStack('JavaScript'));
console.log(reverseStringStack('12345'));
