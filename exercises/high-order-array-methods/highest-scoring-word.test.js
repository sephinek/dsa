const highestScoringWord = require('./highest-scoring-word');

test('Return the highest scoring word as a string', () => {
  expect(highestScoringWord('man i need a taxi up to ubud')).toBe('taxi');
  expect(highestScoringWord('what time are we climbing up the volcano')).toBe(
    'volcano'
  );
  expect(highestScoringWord('take me to semynak')).toBe('semynak');
});
