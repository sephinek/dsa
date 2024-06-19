// console.time();
// function areAllCharactersUnique(string) {
//   const map = new Map();

//   for (let s of string) {
//     if (!map.has(s)) {
//       map.set(s, { count: 1 });
//     } else {
//       map.get(s).count++;
//     }
//   }

//   for (let [key, value] of map) {
//     if (map.get(key).count >= 2) return false;
//   }

//   return true;
// }

// console.log(areAllCharactersUnique('abcdefga'));
// console.timeEnd();

// console.time();
// function areAllCharactersUnique(str) {
//   const charCount = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (charCount[char]) return false;

//     charCount[char] = true;
//   }

//   return true;
// }

// console.log(areAllCharactersUnique('abcdefga'));
// console.timeEnd();

console.time();
function areAllCharactersUnique(string) {
  const charSet = new Set();

  for (let s of string) {
    if (charSet.has(s)) {
      return false;
    }

    charSet.add(s);
  }

  return true;
}

console.log(areAllCharactersUnique('abcdefga'));
console.timeEnd();

module.exports = areAllCharactersUnique;
