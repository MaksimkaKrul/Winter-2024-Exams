// Return an array without duplicates
//Fixed bad naming, but still need to change forEach for optimization
//Formated code a bit, added const, let etc.
//Instead of forEach we use for of now, and no more new Set, just an empty array
//Instead of deleting from original and filtering, now we just do all things in one array
//Also deleted uniqueValues, because we don't need them anymore
'use strict';

const getDistinctValues = (inputArray) => {
  const resultArray = [];

  for (const value of inputArray) {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  }

  return resultArray;
};

module.exports = getDistinctValues;
