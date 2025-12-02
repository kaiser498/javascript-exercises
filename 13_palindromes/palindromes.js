const palindromes = function (string) {
  const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((char) => alphaNumeric.includes(char))
    .join("");
  // return cleanedString;
  const reversedString = cleanedString.split("").toReversed().join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
