function countOccurrences(str, char) {
  if (!str.length) return;
  let result = 0;

  for (let c of str) {
    if (c === char) result++;
  }

  return result;
}

console.log(countOccurrences('Hello, my name is Sephine.', '3'));
console.log(countOccurrences("It's nice out there", 'a'));
console.log(countOccurrences('You can loop through a string', 'r'));
console.log(countOccurrences('How are you today?', 't'));

module.exports = countOccurrences;
