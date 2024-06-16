function fizzbuzzArray(n) {
  const result = [];
  let counter = 1;

  while (counter <= n) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      result.push('FizzBuzz');
    } else if (counter % 3 === 0) {
      result.push('Fizz');
    } else if (counter % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(counter);
    }
    counter++;
  }

  return result;
}

module.exports = fizzbuzzArray;
