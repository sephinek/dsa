const validAnagrams = require('./valid-anagrams');

test('Determines whether they are valid anagrams of each other', () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('hello', 'world')).toBe(false);
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true);
});
