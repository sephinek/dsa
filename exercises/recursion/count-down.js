function countDown(num) {
  // Base case
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  // Recursive Case
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
