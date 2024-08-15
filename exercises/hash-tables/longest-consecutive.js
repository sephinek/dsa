function longestConsecutiveSequence(nums) {
  if (nums.length <= 1) return nums.length;
  const numsArr = [...new Set(nums)].sort((a, b) => a - b);
  const result = [];
  let index = 0;

  while (numsArr[index + 1] && index < numsArr.length) {
    if (numsArr[index] + 1 === numsArr[index + 1]) {
      result.push(numsArr[index]);
      result.push(numsArr[index + 1]);
      index += 2;
    } else {
      index++;
      continue;
    }
  }

  return result.length;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1])); // 10
console.log(longestConsecutiveSequence([3, 5, 6, 9])); // 2
