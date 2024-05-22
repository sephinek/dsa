// Given an number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means for N=5 -> 2+3

function fibonacciIterative(n) {
  let seq = [0, 1];

  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 2] + seq[i - 1]);
  }

  return seq[n];
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(10));
console.log(fibonacciRecursive(10));
