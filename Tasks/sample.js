// Get one random element from an array
//added 'use strict'
//insted of using return arr, we just return the result
//changed function name
//Just one line function

'use strict'

const randomArrayElem = (arr) => arr[Math.floor(Math.random() * arr.length)];


module.exports = randomArrayElem;
