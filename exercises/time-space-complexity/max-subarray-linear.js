function maxSubarraySum(arr, k) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];

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
