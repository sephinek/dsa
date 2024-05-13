// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

function firstRecurringChar(arr) {
  if (arr.length <= 1) return;

  let index = 0;
  let records = [];

  while (index < arr.length) {
    if (records.includes(arr[index])) return arr[index];
    else records.push(arr[index]);
    index++;
    // console.log(records);
  }
}

function firstRecurringChar2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = 1;
    }
  }
  return undefined;
} // O(n)

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 3, 4, 5]));
