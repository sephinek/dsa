function permutations(str) {
  let result = [];

  if (str.length === 0) {
    result.push('');
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstChar + subPermutations[j]);
    }
  }

  return result;
}

console.log(permutations('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations('dog')); // ['dog', 'dgo', 'odg', 'ogd', 'gdo', 'god']
