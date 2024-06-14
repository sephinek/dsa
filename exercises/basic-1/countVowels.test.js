const countVowels = require('./countVowels');

test('Return the number of vowels in the input string.', () => {
  expect(countVowels('aeiou')).toBe(5);
  expect(countVowels('hello')).toBe(2);
  expect(countVowels('Hi, my name is Sephine.')).toBe(7);
  expect(countVowels('why')).toBe(0);
  expect(countVowels('HI!')).toBe(1);
});
