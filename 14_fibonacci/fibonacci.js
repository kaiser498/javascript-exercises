const fibonacci = function (num) {
  let firstPrev = 1;
  let secondPrev = 0;
  if (num == 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }
  for (i = 2; i <= num; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
