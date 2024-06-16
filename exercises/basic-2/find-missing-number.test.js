const findMissingNumber = require('./find-missing-number');

test('Return the missing number in an array of unique numbers from 1 to n(inclusive).', () => {
  expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
  expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
  expect(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])).toBe(7);
});
