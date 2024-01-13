// Find longest string
//Deleted Math that we don't use
//Added let, 'use strict' and changed bad names
//deleted unnecessary {} in for loop
//Still thinking about Object.assign and if else things in code
//Formating code a bit for nice looking
//Made a defaultResult for not magic string
//Instead of if else statements now we have just one if
//Deleted Object.assign, because looks like we don't use it anywhere


'use strict';

const findLongestString = (strings = []) => {
  const defaultResult = ['Not found'];
  let maxLength = -1;
  let longestString = defaultResult;

  for (const currentStr of strings) {
    const currentStrLonger = currentStr.length > maxLength

    if (currentStrLonger) {
      maxLength = currentStr.length;
      longestString = currentStr;
    }
  }

  return longestString;
};

module.exports = findLongestString;
