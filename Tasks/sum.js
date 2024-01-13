// Sum all numbers from an array
//Deteled unused variables
//Fixed bad naming
//Added 'use strict' and const where needed
//deleted unrechable code   sum.push(sum.length - 1);
//Removed def. parameter for result sum, and now it's just arrow function
//Instead of pushing in array with resultSum[resultSum.length - 1] we just add item with +=
//Removed unnecessary lengh check

'use strict';

const numbersArraySum = ((inputArray = []) => {
  let sum = 0;
  const resultSum = [0];

  for (const item of inputArray) {
    if (typeof item === 'number') {
      sum += item;
      resultSum.push(sum);
    }
  }

  return resultSum[resultSum.length - 1];
});

module.exports = numbersArraySum;
