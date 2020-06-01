// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){// check if the array is an array
        return true;// return true
    }
    return false;// default return false
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){// checking if value is a array
        return false;// return false
    }
    if(value === null){// checking if value is a null
        return false;// return false
    }
    if(value instanceof Date){// checking if value is a date
      return false;// return false
    }
    if(typeof(value) === "object"){// checking if a value is a object 
        return true;// return true
    }
    return false;// default return false
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(isArray(value)){// checking if value is an array
        return true;// return true
    }
    if(isObject(value)){// checking if value is an object 
        return true;// return true
    }
    return false;// default return false
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if(isArray(value)){// checking if value is a array
        return "array";// return array
    }
    if(value === null){// checking if value is a null
        return "null";// return null
    }
    if(value instanceof Date){// checking if value is a date
      return "date";// return date
    }
    return typeof(value);// return the output of type of with the arguement value
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
