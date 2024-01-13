// Sum all numbers from an array
//Deteled unused variables
//Fixed bad naming
//Added 'use strict' and const where needed
//deleted unrechable code   sum.push(sum.length - 1);
'use strict'

const numbersArraySum = (resultSum = function (inputArray = () => {}) {
  const resultSum = [0];
  
  for (const item of inputArray) {
    let itemType = typeof item;
    if (itemType === 'number') {
      if (resultSum.length > 0) {
        const sumWithPrevious = resultSum[resultSum.length - 1] + item;
        resultSum.push(sumWithPrevious);
      }
    }
  }
  return resultSum[resultSum.length - 1];
});

module.exports = numbersArraySum;
