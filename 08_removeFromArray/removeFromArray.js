const removeFromArray = function (arr, num1, num2) {
  if (arguments.length > 3) {
    arr = [];
    return arr;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num1 || arr[i] === num2) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
