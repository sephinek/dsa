const calculator = require('./calculator');

test('Calculate two number inputs with a string operator', () => {
  expect(calculator(1, 2, '+')).toBe(3);
  expect(calculator(3, 3, '*')).toBe(9);
  expect(calculator(17, 2, '-')).toBe(15);
  expect(calculator(16, 4, '/')).toBe(4);
});
