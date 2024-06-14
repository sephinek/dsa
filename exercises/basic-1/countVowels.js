function countVowels(str) {
  const formattedStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let char of formattedStr) {
    if (vowels.includes(char)) counter++;
  }

  return counter;
}

module.exports = countVowels;
