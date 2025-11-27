const reverseString = function (string) {
  stringArray = string.split("");
  stringArraySort = stringArray.toReversed();
  newStringArray = stringArraySort.join("");
  return newStringArray;
};

// Do not edit below this line
module.exports = reverseString;
