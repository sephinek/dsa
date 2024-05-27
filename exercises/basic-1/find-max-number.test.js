const findMaxNumber = require('./find-max-number');

test('Return maximum number from an array of numbers', () => {
  expect(findMaxNumber([1, 5, 3, 7, 15])).toBe(15);
  expect(findMaxNumber([12, 53, 30, 7, 15])).toBe(53);
  expect(findMaxNumber([1, 53, 322, 72, 15])).toBe(322);
  expect(findMaxNumber([11, 15, 3, 7, 5])).toBe(15);
});
