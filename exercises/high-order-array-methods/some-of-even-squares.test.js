const someOfEvenSquares = require('./some-of-even-squares');

test('Return the sum of the squares of the even numbers in the input array.', () => {
  expect(someOfEvenSquares([1, 2, 3, 4, 5])).toBe(20);
  expect(someOfEvenSquares([1, 0, 1, 2, 3, 4])).toBe(20);
  expect(someOfEvenSquares([])).toBe(0);
});
