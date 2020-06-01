// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for(let i = 1; i <= 100; i++){// looping from 1 to 100
        if(i % 3 === 0 && i % 5 === 0){// checking if its a multiples of 3 and 5
            console.log("FizzBuzz");// log to the console fizzbuzz
        }else if(i % 3 === 0){// checking if its a multiples of 3
            console.log("Fizz");// log to the console fizz
        }else if(i % 5 === 0){//checking the if its a multiples of 5
            console.log("Buzz");//log buzz to the console
        } else{// default
            console.log(i);// log value of i into the console
        }
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}