function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
const k1 = 3;
console.log(maxSubarraySum(arr1, k1)); // 24

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
const k2 = 4;
console.log(maxSubarraySum(arr2, k2)); // -11
