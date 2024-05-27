function findMaxNumber(arr) {
  let max = arr[0];

  for (let n of arr) {
    if (max < n) max = n;
  }

  return max;
}

console.log(findMaxNumber([1, 5, 3, 7, 15]));
console.log(findMaxNumber([12, 53, 30, 7, 15]));
console.log(findMaxNumber([1, 53, 322, 72, 15]));
console.log(findMaxNumber([11, 15, 3, 7, 5]));

module.exports = findMaxNumber;
