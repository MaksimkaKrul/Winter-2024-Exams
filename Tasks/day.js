// Get day number
//Moved dayNameList into function
//added 'use strict'
//Changed bad names
//Added const before getDayIndex
//Now we are using for...of insted of for with i
//deleted let i because we don't need it anymore

'use strict'

const getDayIndex = (dayName) => {
  let dayNameList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];  

  for (const [index, day] of dayNameList.entries()) {
    if (dayName.indexOf(day.toLowerCase()) == 0) return index + 1;
  }
  return -1;
};

module.exports = getDayIndex;
