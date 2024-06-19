function findNonRepeating(str) {
  if (str.length === 0) return null;
  if (str.length === 1) return str;

  let unique = null;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1]) {
      if (str[i + 1] === str[i]) {
        unique = null;
      } else {
        if (str[i - 1] && unique !== null) return unique;
        unique = str[i];
      }
      i++;
    } else {
      return unique;
    }
  }
  return unique;
}

console.log(findNonRepeating('aabbcc'));

module.exports = findNonRepeating;
