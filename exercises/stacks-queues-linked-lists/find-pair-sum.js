const DoublyLinkedList = require('./doubly-linked-list-implementation');

function findPairSum(nums, targetSum) {
  const seen = new DoublyLinkedList();

  for (const num of nums) {
    const difference = targetSum - num;

    if (seen.contains(difference)) {
      return [difference, num];
    }

    seen.append(num);
  }

  return null;
}

console.log(findPairSum([2, 6, 12, 11, 6, 10], 22));
