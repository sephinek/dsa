function hashtagGenerator(str) {
  if (str.trim().length >= 140 || !str.trim().length) return false;
  return (
    '#' +
      str
        // .trim()
        // .split(/\s+/)
        .split(' ')
        .map((word) => word.at(0).toUpperCase() + word.substring(1))
        .join('') || false
  );
}

function hashtagGenerator2(str) {
  const hashtag = str.split(' ').reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.slice(1);
  }, '#');

  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = hashtagGenerator;
