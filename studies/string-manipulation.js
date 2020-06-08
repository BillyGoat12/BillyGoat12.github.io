/*
* 
********************************************************************************
*                             STRING MANIPULATION                              *
********************************************************************************
* 
* STRING MANIPULATION - Strings can be manupulated with operators and string method.
* 
*/
 
 
 // 1. With Operators //
 
/* 
* Concatenation is used to join two or more strings and return a new string of the combination.
*
*/
 
// initializing my variables and assigning values
 
var string1 = 'Google'; 
var string2 = 'search engine';

// add all the variables with the + sign and spaces with ' '
console.log(string1 + ' ' + 'is such a great' + ' ' + string2);
// prints => Google is such a great search engine


// Reassigning using operators:
// += -= *= /= %/

var car = 'race';
car += 'car';
console.log(car); // => racecar
// the variable car is being reassigned and concated at the same time 

// 2. With string methods //

/*
* We can use method or properties to manipulate and examine the contexts
of a strings.
*/
// a. Trim method: this method will remove any unnecessary whitespaces before or after a string

var str = "       Welcome!        ";

console.log(str.trim());
// prints => 'Welcome!'


// b. replace method 
// you can change a specific value, and return a new string at the replacement of that specific value 

var replaceStr = 'I am playing the games!';

replaceStr = replaceStr.replace('playing the games','watching tv');

console.log(replaceStr);

 // print => I am watching tv, playing the games got replaced
 
 // c. .Length property 

/* 
* give us the length of the string
*/

 var name = 'Billy';

 console.log(name.length); // ==> returns 5
 
 // d. upperCase() or lowerCase()
// this can change a character in a string from lowercase to uppercase or vice versa

 // example of casing to uppercase
 let toLowerCase = 'hey';
 toLowerCase = toLowerCase.toUpperCase();
 console.log(toLowerCase); // => 'HEY' 

 // all the chars in this string will change to caps
 
 // example to casing to lowercase: 
 var toUpperCase = "HEY";
 toUpperCase = toUpperCase.toLowerCase();
 console.log(toUpperCase); // => 'hey'
 // all the chars in this string will change to lower case 
 
 // e. indexOf method

/*
* Method used to find the index the word can be found in the string.
*/

var greeting = "Hi my name is Billy";

console.log(greeting.indexOf("Billy")); // ==> returns 14