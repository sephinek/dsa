// console.time('test');
// function validAnagrams(str1, str2) {
//   const map1 = new Map();
//   const map2 = new Map();

//   for (let char of str1) {
//     map1.has(char) ? map1.get(char) + 1 : map1.set(char, 1);
//   }

//   for (let char of str2) {
//     if (!map1.has(char)) return false;
//     map2.has(char) ? map2.get(char) + 1 : map2.set(char, 1);
//   }

//   for (let [char, count] of map1) {
//     if (map2.get(char) !== count) return false;
//   }

//   return true;
// }
// console.timeEnd('test');

console.time('test');
function validAnagrams(str1, str2) {
  const freqCount1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}
console.timeEnd('test');

validAnagrams('astronomer', 'moonstarer');

module.exports = validAnagrams;
