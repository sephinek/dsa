const findMissingLetter = require('./find-missing-letter');

test('Return the missing letter in an array of consecutive letters.', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e');
  expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P');
  expect(findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z'])).toBe('y');
});
