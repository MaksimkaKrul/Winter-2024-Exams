// Return an array without duplicates
//Fixed bad naming, but still need to change forEach for optimization
//Formated code a bit, added const, let etc.
//Instead of forEach we use for of now, and no more new Set, just an empty array
'use strict'

const getDistinctValues = (inputArray) => {
  const uniqueValues = [];
  let currentIndex = 0;

  for (const value of inputArray) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    } else {
      delete inputArray[currentIndex];
    }
    currentIndex++;
  }
  
  return inputArray.filter((x) => typeof x === 'number');
};

module.exports = getDistinctValues;
