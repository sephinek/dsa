function titleCase(str) {
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('sHoRt AnD sToUt'));
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

module.exports = titleCase;
