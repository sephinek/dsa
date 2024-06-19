const findNonRepeating = require('./find-non-repeating');

test('Return the first non-repeating character in the string.', () => {
  expect(findNonRepeating('aabccdeff')).toBe('b');
  expect(findNonRepeating('aabbcc')).toBe(null);
  expect(findNonRepeating('abcdef')).toBe('a');
});
