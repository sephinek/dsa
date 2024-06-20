function someOfEvenSquares(arr) {
  if (!arr.length) return 0;
  return arr
    .filter((n) => n % 2 === 0)
    .map((n) => n ** 2)
    .reduce((acc, curr) => acc + curr, 0);
}

module.exports = someOfEvenSquares;
