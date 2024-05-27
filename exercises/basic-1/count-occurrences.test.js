const countOccurrences = require('./count-occurrences');

test('Count the number of char that searches for from the string', () => {
  expect(countOccurrences('Hello, my name is Sephine.', 'e')).toBe(4);
  expect(countOccurrences("It's nice out there", 'a')).toBe(0);
  expect(countOccurrences('You can loop through a string', 'r')).toBe(2);
  expect(countOccurrences('How are you today?', 't')).toBe(1);
});
