// Get day number
//Moved dayNameList into function
//Changed bad names
//Added const before getDayIndex

'use strict'

const getDayIndex = (dayName) => {
  let dayNameList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let i;

  for (i = 0; i < dayNameList.length; i++) {
    if (dayName.startsWith(dayNameList[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayIndex;
