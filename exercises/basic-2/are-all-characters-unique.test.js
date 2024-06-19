const areAllCharactersUnique = require('./are-all-characters-unique');

test('Return true or false depending on whether all characters in the input string are unique', () => {
  expect(areAllCharactersUnique('abcdefg')).toBe(true);
  expect(areAllCharactersUnique('abcdefgA')).toBe(true);
  expect(areAllCharactersUnique('programming')).toBe(false);
  expect(areAllCharactersUnique('')).toBe(true);
  expect(areAllCharactersUnique('a')).toBe(true);
});
