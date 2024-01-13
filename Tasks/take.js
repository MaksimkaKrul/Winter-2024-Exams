// Copy all listed keys from dictionary
//Fixed bad naming
//Shorted if statement
//deleted variables that we don't use
//instead of forEach now we use for...of loop
//Now instead of deleting keys from original dict we return new that we need

'use strict';

const copyKeys = (inputDictionary, ...keyWeWant) => {
  const resultDictionary = {};

  for (const key of keyWeWant) {
    if (inputDictionary.hasOwnProperty(key)) {
      resultDictionary[key] = inputDictionary[key];
    }
  }

  return resultDictionary;
};

module.exports = copyKeys;
