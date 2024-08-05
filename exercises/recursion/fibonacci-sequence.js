function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
