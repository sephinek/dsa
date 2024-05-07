// Create a function that reverses a string:
// sephine => enihpes

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string')
    return 'Invalid input!';

  let result = [];

  for (let char of str) {
    result.unshift(char);
  }

  return result.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse('Hi, my name is Sephine'));
console.log(reverse2('Hi, my name is Sephine'));
console.log(reverse3('Hi, my name is Sephine'));
