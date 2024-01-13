// Copy all listed keys from dictionary
//Fixed bad naming
//Shorted if statement
//deleted variables that we don't use

'use strict'

const copyKeys = (inputDictionary, ...keyWeWant) => {
  const keysList = Object.keys(inputDictionary);

  keysList.forEach((_) => {
    if (!keyWeWant.includes(_)) delete inputDictionary[_]
  });

  return inputDictionary;
};

module.exports = copyKeys;
