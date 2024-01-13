// Count words in a string
//For beginning I fixed bad naming and deleted unnececary flag
//The flag thing is still here and will fix in next commit
'use strict'
const countWordsInArray = (inputString) => {
  let numberOfWords = 0;
  let flag = false;
  for (const word of inputString) {
    if (!flag) {
      if (word === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        numberOfWords++;
      }
    } else {
      if (word === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  return numberOfWords;
};

module.exports = countWordsInArray;
