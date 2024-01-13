// Copy all listed keys from dictionary
//Fixed bad naming
//Shorted if statement
//deleted variables that we don't use
//instead of forEach now we use for...of loop

'use strict'

const copyKeys = (inputDictionary, ...keyWeWant) => {
  const keysList = Object.keys(inputDictionary);

  for (const key of keysList) {
    if (!keyWeWant.includes(key)) {
      delete inputDictionary[key];
    }
  }

  return inputDictionary;
};

module.exports = copyKeys;
