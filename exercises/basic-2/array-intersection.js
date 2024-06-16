// function arrayIntersection(arr1, arr2) {
//   let intersection = [];

//   arr1.forEach((n) => {
//     if (arr2.includes(n) && !intersection.includes(n)) intersection.push(n);
//   });

//   return intersection;
// }

function arrayIntersection(arr1, arr2) {
  const intersection = new Set(arr1);
  const set2 = new Set(arr2);

  for (let n of intersection) {
    if (!set2.has(n)) {
      intersection.delete(n);
    }
  }

  return Array.from(intersection);
}

module.exports = arrayIntersection;
