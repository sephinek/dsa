// console.time('test');
// function displayLikes(arr) {
//   const n = arr.length;

//   const subject = (arr) => {
//     if (n === 0) {
//       return 'No one';
//     } else if (n === 1) {
//       return arr[0];
//     } else if (n === 2) {
//       return `${arr[0]} and ${arr[1]}`;
//     } else if (n === 3) {
//       return `${arr[0]}, ${arr[1]} and ${arr[2]}`;
//     } else {
//       return `${arr[0]}, ${arr[1]} and ${n - 2} others`;
//     }
//   };

//   const verb = n <= 1 ? 'likes' : 'like';

//   return `${subject(arr)} ${verb} this`;
// }

// displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']);
// console.timeEnd('test');

console.time('test');
function displayLikes(names) {
  const length = names.length;

  if (length === 0) {
    return 'No one likes this';
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']);
console.timeEnd('test');
module.exports = displayLikes;
