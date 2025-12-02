function getAge(death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}
const findTheOldest = function (people) {
  //   const sortOldest = people.sort((a, b) => {
  //     let bLived = b.yearOfDeath - b.yearOfBirth;
  //     let alived = a.yearOfDeath - a.yearOfBirth;
  //     return bLived - alived;
  //   });
  //   return sortOldest[0];
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
    return oldestAge > currentAge ? oldest : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
