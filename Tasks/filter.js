// Filter array by type name
//added 'use strict'
//changed bad naming
//formated code a bit
//Changed for loop using .entries to get index AND element
//instead of changing arr, now we create filteredArray and filter arr to complete the task
'use strict'

const filterByType = (arr, type) => {
  const elemetsToRemove = [];

  for (const [index, element] of arr.entries()) {
    if (typeof element !== type) {
      elemetsToRemove.unshift(index);
    }
  } 

  const filteredArray = arr.filter((_, index) => !elemetsToRemove.includes(index));
  return filteredArray;
};

module.exports = filterByType;

