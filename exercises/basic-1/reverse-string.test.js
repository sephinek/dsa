const reverseString = require('./reverse-string');

test('Return reversed string.', () => {
  expect(reverseString('abcde')).toBe('edcba');
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
});
