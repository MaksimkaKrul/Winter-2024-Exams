// Return an array without duplicates
//Fixed bad naming, but still need to change forEach for optimization
//Formated code a bit, added const, let etc.
'use strict'

const getDistinctValues = (inputArray) => {
  const uniqueSet = new Set();
  let currentIndex = 0;

  inputArray.forEach((value) => {
    if (uniqueSet.has(value)) {
      delete inputArray[currentIndex];
    } 
    else {
      uniqueSet.add(value);
    }
    currentIndex++;
  });
  
  return inputArray.filter((x) => typeof x === 'number');
};

module.exports = getDistinctValues;
