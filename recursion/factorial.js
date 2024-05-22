// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let result = number;

  for (let i = number - 1; i > 0; i--) {
    result = result * i;
  }

  return result;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
