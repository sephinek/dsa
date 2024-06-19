function formatPhoneNumber(arr) {
  const first = arr.slice(0, 3).join('');
  const middle = arr.slice(3, 6).join('');
  const last = arr.slice(6).join('');

  return `(${first}) ${middle}-${last}`;
}

console.log(formatPhoneNumber([2, 1, 3, 3, 7, 8, 5, 0, 6, 8]));

module.exports = formatPhoneNumber;
