function findMissingLetter(arr) {
  let missing;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      if (arr[i].charCodeAt(0) + 1 !== arr[i + 1].charCodeAt(0))
        missing = arr[i].charCodeAt(0) + 1;
    }
  }

  return String.fromCharCode(missing);
}

console.log(findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']));

module.exports = findMissingLetter;
