function isValidIPv4(str) {
  const arr = str.split('.');

  if (arr.length !== 4) return false;

  return arr.every((n) => {
    const num = parseInt(n);
    return num >= 0 && num <= 255 && n === num.toString();
  });
}

module.exports = isValidIPv4;

console.log(isValidIPv4('123.45.67.89')); // true
console.log(isValidIPv4('1.2.3')); // false
console.log(isValidIPv4('1.2.3.4.5')); // false
console.log(isValidIPv4('123.456.78.90')); // false
console.log(isValidIPv4('123.045.067.089')); // false
