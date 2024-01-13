// Return an remove without listed values
//fixed bad naming
//added 'use strict'
//instead of all for's and stuff, we can just filter and make another array for it
'use strict'

const skipValues = (inputArray, ...elementsToRemove) => {
  const arrayWithSkips = inputArray.filter((element) => !elementsToRemove.includes(element));
  return arrayWithSkips;
};

module.exports = skipValues;
