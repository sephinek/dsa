const removeDuplicates = require('./remove-duplicates');

test('Return a new array with duplicates removed.', () => {
  expect(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(removeDuplicates([1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
  expect(
    removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true])
  ).toEqual([1, 2, 3, 4, 5, true, 'hello']);
});
