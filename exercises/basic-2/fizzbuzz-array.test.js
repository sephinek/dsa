const fizzbuzzArray = require('./fizzbuzz-array');

test("Return an array of numbers from 1 to the number passed in. However, if the number is divisible by 3, replace the number with 'Fizz' or by 5 replace it with 'Buzz', or by both 3 and 5 'FizzBuzz'", () => {
  expect(fizzbuzzArray(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  expect(fizzbuzzArray(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});
