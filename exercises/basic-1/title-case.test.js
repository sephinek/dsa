const titleCase = require('./title-case');

test('Return a string with the first letter of each word capitalized.', () => {
  expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  expect(titleCase('sHoRt AnD sToUt')).toBe('Short And Stout');
  expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe(
    'Here Is My Handle Here Is My Spout'
  );
});
