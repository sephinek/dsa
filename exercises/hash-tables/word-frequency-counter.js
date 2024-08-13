function wordFrequencyCounter(str) {
  let wordFrequencyMap = new Map();

  for (let word of str.toLowerCase().split(/\W+/)) {
    wordFrequencyMap.has(word)
      ? wordFrequencyMap.set(word, wordFrequencyMap.get(word))
      : wordFrequencyMap.set(word, 1);
  }

  return wordFrequencyMap;
}

console.log(
  wordFrequencyCounter('The quick brown fox jumps over the lazy dog.')
);
