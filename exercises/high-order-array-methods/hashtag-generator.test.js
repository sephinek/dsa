const hashtagGenerator = require('./hashtag-generator');

test('Return generated hashtag string or false', () => {
  expect(hashtagGenerator('JavaScript is awesome')).toBe(
    '#JavaScriptIsAwesome'
  );
  expect(hashtagGenerator('hello world')).toBe('#HelloWorld');
  expect(hashtagGenerator('')).toBe(false);
});
