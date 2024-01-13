// Find longest string
//Deleted Math that we don't use
//Added let, 'use strict' and changed bad names
//deleted unnecessary {} in for loop
//Still thinking about Object.assign and if else things in code
//Formating code a bit for nice looking

'use strict'

const findLongestString = function (string = [],) {
  let maxLength = -1;
  let longestString = ['Not found'];
  for (let str of string) {
    if (str.length > maxLength) {
      maxLength = str.length;
    } 
    else {
      str = 0;
    }

    if (str.length >= maxLength) {
      longestString = str;
    } 
    else {
      str = -1;
    }
  }
  Object.assign(string, { length: longestString.length });
  return longestString;
};

module.exports = findLongestString;
