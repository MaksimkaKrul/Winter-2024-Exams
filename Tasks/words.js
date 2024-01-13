// Count words in a string
//For beginning I fixed bad naming and deleted unnececary flag
//The flag thing is still here and will fix in next commit
//Deleted all of the flags, and instead of it just count with .split
//Deleted stupid \n after if statement 
//Now if(inputString =='') is single line

'use strict'
const countWordsInArray = (inputString) => {
  if (inputString == '') return 0;
  
  return inputString.split(' ').length;
};

module.exports = countWordsInArray;
