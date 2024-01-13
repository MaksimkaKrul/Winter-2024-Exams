// Get month number
//Moved monthList into function
//added 'use strict'
//Fixed bad names
//Deleted 'l' and now just using monthList.length
//using lowerMonthName instead of method in for
//using for...of instead of for

'use strict'

const getMonthIndex = (monthName) => {
  let monthList = [
    'jan','feb','mar',
    'apr','may','jun',
    'jul','aug','sep',
    'oct','nov','dec',
  ];
  
  let lowerMonthName = monthName.toLowerCase();

  for (const [index, month] of monthList.entries()) {
    if (lowerMonthName.indexOf(month) == 0) return index + 1;
  }

  return -1;
};


module.exports = getMonthIndex;
