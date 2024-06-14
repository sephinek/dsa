const isPalindrome = require('./isPalindrome');

test('return true if the string is a palindrome and false if it is not.', () => {
  expect(isPalindrome('Madam')).toBe(false);
  expect(isPalindrome('madam')).toBe(true);
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(false);
  expect(isPalindrome('')).toBe(true);
});
