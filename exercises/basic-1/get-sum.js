function getSum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return;
  return a + b;
}

console.log(getSum(1, 2));
console.log(getSum(10, 5));
console.log(getSum(2, 2));
console.log(getSum(10, 50));

module.exports = getSum;
