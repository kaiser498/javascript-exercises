const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function (a, b) {
  let total = 1;
  if (b === 1) {
    return a;
  } else {
    for (i = 1; i <= b; i++) {
      total *= a;
    }
    return total;
  }
  // return a ** b;
};

const factorial = function (a) {
  let total = 1;
  for (i = a; i >= 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
