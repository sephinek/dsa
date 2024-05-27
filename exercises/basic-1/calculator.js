function calculator(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number') return;

  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      throw new Error('Invalid operator');
  }

  return result;
}

console.log(calculator(1, 2, '+'));
console.log(calculator(3, 3, '*'));
console.log(calculator(17, 2, '-'));
console.log(calculator(16, 4, '/'));

module.exports = calculator;
