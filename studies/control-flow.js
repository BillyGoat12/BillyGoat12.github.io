/*
*
*
*
********************************************************************************
*                             CONTROL FLOW                                     *
********************************************************************************                             
*
*
*
* Control Flow - if/ else if/ and else chain statement or block
* of code. It is one of the most often used statements. 
* Condition evaluated has a boolean value, true or false. 
*/
// If //
/** If chain - will always start the chain and evaluate if a specific condition 
* is true, but if the first condition is false, code runs to the next condition 
* If-Else If. Code chain is read from top to bottom and there can be as many 
* conditions as needed. 
* Code will stop to evaluate at the first true condition found in the chain. 
* /
/*
if(condition) {
  statement; 
}
*/
// Else if//
/** 
 * Else if chain - will execute only if If statement is false, 
 * we can have many Else If as needed. 
 * /
/*
if(condition) {
 //statement; 
}else if (condition){
 //statement2;
}
*/
    
// Else chain - will evaluate only if all previous conditions are false. 
/*
if(condition) {
statement; 
}else if (condition){
statement2;
} else {
  //statement;
}
*/
var x = 5, 
    y = 5;
if (x > y) {
    console.log('x is greater than y');
} else if (x < y) {
    console.log('x is less than y');
} else {
    console.log('x is equal to y');
}
/**
* Other option for conditional purpose in JavaScript are 
* ternary operator. 
* If condition evaluates true, than expression 1 will be valid, 
* but if false the second expression will be valid. 
*/
// condition ? expression_1 : expression_2
      var year = 1990;
      var birthYears = year < 2010 ? true : false;
      console.log(birthYears);// prints => true
/**
* Another option for conditional evaluation in JavaScript is
* switch statement. It is best in use when we are looking for
* only one condition. It must have a break after each statement
* and must end with default, similar to else statement. Default
* will run if all previous conditions are false. 
*/
// switch (expression) {
//     case value_1:
//         statement_1;
//         break;
//     case value_2:
//         statement_2;
//         break;
//     case value_3:
//         statement_3;
//         break;
//     default:
//         default_statement;
// }
var color = 'yellow';
switch(color) {
  case 'green':
    console.log('I like green color.'); // code block
    break;
  case 'red':
    console.log('I like red color.');  // code block
    break;
  case 'black':
    console.log('I like black color.');  // code block 
    break;  
  default:
    console.log('I like all colors.');
    // prints => I like all colors. // reads default,as all before are false.
}