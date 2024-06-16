console.time('test');
function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const sorted = arr.sort((a, b) => a - b);
  let counter = 1;
  let i = 0;

  while (sorted[i] === counter) {
    if (sorted[i] !== counter) break;
    else {
      counter++;
      i++;
    }
  }

  return counter;
}

console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.timeEnd('test');

// console.time('test');
// function findMissingNumber(arr) {
//   if (arr.length === 0) return 1;

//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }

//   return expectedSum - actualSum;
// }

// console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
// console.timeEnd('test');

module.exports = findMissingNumber;
