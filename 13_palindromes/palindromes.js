const palindromes = function (string) {
  let result = "";
  for (i = 0; i < string.length; i++) {
    let char = string[i];
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      result += char;
    }
  }
  let lowerCased = result.toLowerCase();
  let stringArray = lowerCased.split("");
  let reversed = stringArray.toReversed();
  let joined = reversed.join("");
  if (joined === lowerCased) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
