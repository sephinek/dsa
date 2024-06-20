function highestScoringWord(str) {
  const arr = str.split(' ');
  let map = new Map();
  let highestScoreWord = ['', 0];

  for (let word of arr) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96;
    }

    map.set(word, score);
  }

  for (let [word, value] of map) {
    if (value > highestScoreWord[1]) {
      highestScoreWord[1] = value;
      highestScoreWord[0] = word;
    }
  }

  return highestScoreWord[0];
}

// function highestScoringWord(str) {
//   const words = str.split(' ');

//   const scores = words.map((word) => {
//     return Array.from(word).reduce(
//       (score, letter) => score + letter.charCodeAt(0) - 96,
//       0
//     );
//   });

//   const highestScore = Math.max(...scores);
//   const highestIndex = scores.indexOf(highestScore);

//   return words[highestIndex];
// }

highestScoringWord('man i need a taxi up to ubud');

module.exports = highestScoringWord;
