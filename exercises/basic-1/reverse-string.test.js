const reverseString = require('./reverse-string');

test('Return reversed string.', () => {
  expect(reverseString('abcde')).toBe('edcba');
});
