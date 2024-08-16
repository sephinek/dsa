const HashTable = require('./custom-hash-table');

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/);

  const wordFrequency = new HashTable();

  const targetWord = word.toLowerCase();

  let count = 0;

  for (const currentWord of words) {
    if (currentWord === '') continue;

    if (wordFrequency.has(currentWord)) {
      wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
    } else {
      wordFrequency.set(currentWord, 1);
    }

    if (currentWord === targetWord) {
      count = wordFrequency.get(currentWord);
    }
  }

  return count;
}

console.log(
  wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
);

console.log(wordInstanceCounter('Lorem ipsum dolor sit sit', 'sit'));
