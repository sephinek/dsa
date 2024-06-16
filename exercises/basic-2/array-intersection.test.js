const arrayIntersection = require('./array-intersection');

test('Return an array containing the intersection of the two input arrays', () => {
  expect(arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])).toEqual([
    1, 3, 5,
  ]);
  expect(arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2])).toEqual([]);
  expect(arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual([
    1, 2, 3, 4, 5,
  ]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  expect(arrayIntersection([1, 2, 3, 3], [3, 3, 5])).toEqual([3]);
});
