function diceGame(numSimulations) {
  const resultArr = [];

  for (let i = 0; i < numSimulations; i++) {
    resultArr.push(throwDice());
  }

  function throwDice() {
    const randomNum = () => Math.floor(Math.random() * 6) + 1;
    const dice1 = randomNum();
    const dice2 = randomNum();
    let sum = dice1 + dice2;
    let result = '';

    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }

    return { dice1, dice2, sum, result };
  }

  return resultArr;
}

console.log(diceGame(3));

module.exports = diceGame;
