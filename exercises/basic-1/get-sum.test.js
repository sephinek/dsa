const getSum = require('./get-sum');

test('Return sum of two number inputs', () => {
  expect(getSum(1, 2)).toBe(3);
  expect(getSum(10, 5)).toBe(15);
  expect(getSum(2, 2)).toBe(4);
});
