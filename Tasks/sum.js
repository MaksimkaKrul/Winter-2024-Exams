// Sum all numbers from an array
//Deteled unused variables
//Fixed bad naming
//Added 'use strict' and const where needed
//deleted unrechable code   sum.push(sum.length - 1);
//Removed def. parameter for result sum, and now it's just arrow function
//Instead of pushing in array with resultSum[resultSum.length - 1] we just add item with +=
//Removed unnecessary lengh check
//Instead of array stuff now we just save it all in resultSum, NO MORE ARRAY BULLSHIT

'use strict';

const numbersArraySum = ((inputArray = []) => {
  let resultSum = 0;

  for (const value of inputArray) {
    if (typeof value === 'number') {
      resultSum += value;
    }
  }

  return resultSum;
});

module.exports = numbersArraySum;
