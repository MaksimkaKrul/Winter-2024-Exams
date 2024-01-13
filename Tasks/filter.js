// Filter array by type name
//added 'use strict'
//changed bad naming
//formated code a bit
'use strict'

const filterByType = (arr, type) => {
  remove = [];

  for (const element of arr) {
    elementIndex = arr.indexOf(element);
    if (typeof arr[elementIndex] !== type) {
      remove.unshift(x);
    }
  } 

  for (const elementIndex of remove) arr.splice(elementIndex, 1);
  return arr;
};

module.exports = filterByType;

