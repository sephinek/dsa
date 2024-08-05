function reverseString(str) {
  if (!str.length) return str;

  return str.at(-1) + reverseString(str.slice(0, -1));
}

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('world')); // 'dlrow'
console.log(reverseString('')); // ''
console.log(reverseString('a')); // 'a'
console.log(reverseString('racecar')); // 'racecar'
