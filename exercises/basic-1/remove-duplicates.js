function removeDuplicates(arr) {
  const result = [];

  for (let el of arr) {
    if (!result.includes(el)) result.push(el);
  }

  console.log(result);
  return result;
}

// function removeDuplicates(arr) {
//   const set = new Set(arr);
//   return [...set];
// }

// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

module.exports = removeDuplicates;
