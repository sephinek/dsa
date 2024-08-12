function numberRange(startNum, endNum) {
  if (startNum === endNum) return [startNum];

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

console.log(numberRange(1, 5)); // [1, 2, 3, 4, 5]
console.log(numberRange(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(numberRange(7, 7)); // [7]
