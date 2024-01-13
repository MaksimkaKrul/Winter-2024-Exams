// Return an remove without listed values
//fixed bad naming
//added 'use strict'
'use strict'

const skipValues = (inputArray, ...elementsToRemove) => {
  let indexCount = 0;
  for (const item of inputArray) {
    for (const element of elementsToRemove) {
      if (item === element) {
        inputArray.splice(indexCount, 1);
      }
    }
    indexCount++;
  }
  console.log(inputArray)
  return inputArray;
};

module.exports = skipValues;
