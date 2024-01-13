// Get one random element from an array
//added 'use strict'
//insted of using return arr, we just return the result
//changed function name

'use strict'

const randomArrayElem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = randomArrayElem;
