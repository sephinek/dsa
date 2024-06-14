const isPalindrome = (str) => {
  const refined = str.replace(/[^a-z0-9]/g, '');
  let reversed = '';

  for (let i = refined.length - 1; i >= 0; i--) {
    reversed += refined[i];
  }

  return reversed === refined;
};

module.exports = isPalindrome;
