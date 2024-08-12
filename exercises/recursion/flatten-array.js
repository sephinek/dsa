function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, 3], [4, 5, [6]]])); // [1, 2, 3, 4, 5, 6]
console.log(
  flattenArray([
    [1, 2],
    [3, [4, 5]],
    [6, [7]],
  ])
); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray([1, [[2, [3, 4, 5]]]])); // [1, 2, 3, 4, 5]
