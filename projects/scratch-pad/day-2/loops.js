// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for(let i = 0; i < array.length; i++){// looping through the array
    console.log(array[i]);// logging the value that are being loop over
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for(let i = array.length -1; i >= 0; i--){// looping over the array backwards
    console.log(array[i]);// logging that iterated values of the array
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  let arr = [];// create a array
  for(let key in object){// looping over the keys in the object
    arr.push(key);// pushing the key into the new array
  }
  return arr;// return the array
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(let key in object){// looping over the keys in the object
    console.log(key);//logging keys into the console
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let arr = [];// create a array
  for(let key in object){// looping over the keys in the object
    arr.push(object[key]);// pushing the key - values into the new array
  }
  return arr;// return the array
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(let key in object){// looping over the keys in the object
    console.log(object[key]);//logging keys- values into the console
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  let num = 0;// create a varible with the value of zero
  for(let key in object){// looping over the keys in the object
    num++;// for every loop add one to num
  }
  return num;// return num
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let arr = [];// create a array
  for(let key in object){// looping over the keys in the object
    arr.push(object[key]);//pushing each key into the array
  }
  for(let i = arr.length -1; i >= 0; i--){// looping over the array backwards
    console.log(arr[i]);// logging the value of the array
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
