function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  for (const n of set1) {
    if (set2.has(n)) {
      set1.delete(n);
      set2.delete(n);
    }
  }

  return [...set1, ...set2];
}

console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]
console.log(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5])); // [1, 5]
console.log(symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); // []
console.log(symmetricDifference([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
