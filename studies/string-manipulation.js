/*
* 
********************************************************************************
*                             STRING MANIPULATION                              *
********************************************************************************      
* 
* STRING MANIPULATION - Strings are objects that are not stored as characters or arrays, so build
* in methods and properties have to be used to manipulate their values. 
*/
 
 
 // 1. With Operators //
 
/* 
* The concatenation operation joins two or more string values by using the 
* + sign or the shorter += sign that can be use as well to concatenate strings.
*/
 // concatenation with + 
 
// initializing my variables and assigning values
 var lyric1 = 'She';
 var lyric2 = 'was';
 var lyric3 = 'a small';
 var lyric4 = 'town girl';
 // add all the variables with the + sign and spaces with ' '
 var dontStopBelieving = lyric1 + ' ' + lyric2 + ' ' + lyric3 + ' ' + lyric4;
 console.log(dontStopBelieving); // ==> returns she was a small town girl
// concatenation with +=
 var primus = 'Jeryy was a ';
 // adding text to primus variable with += operator
 primus += 'race car driver';
 console.log(primus); // ==> returns 'Jerry was a race car driver'
// 2. With string methods //
/*
* We can use method or properties to manipulate and examine the contexts
of a strings.
*/
// a. .Length property 
/* 
* It let us know how many characters are in a string.
*/
 var state = 'California';
 console.log(state.length); // ==> returns 10
// b. toUpperCase() method 
/*
* Turns a string into upper case letters.
*/
 var peligro = 'danger';
 console.log(peligro.toUpperCase()); // ==> returns 'DANGER'
// c. toLowerCase() method
/*
* Turns a string into lower case letters
*/
 var mood = "I AM NOT MAD AT YOU";
 console.log(mood.toLowerCase()); // ==> returns 'i am not mad at you'
// d. Split() method 
/*
* Splits a string into an array of sub strings. 
*/
 var myStringSplit = 'The man who sold the world';
 console.log(myStringSplit.split(' ')); 
 // returns [ 'The', 'man', 'who', 'sold', 'the', 'world' ]
// e. Slice() method 
/*
* It let's you select a part of the string but slicing it. 
*/
 var mTV = 'Hello my name is Johnny Knoxville';
 // it will slice on the space 17 till the end
 console.log(mTV.slice(17, mTV.length)); // ==> returns 'Johnny Knoxville'
// f. indexOf method
/*
* Method used to find the index the word can be found in the string.
*/
 var pauloCoelho = "A life without cause is a life without effect";
 console.log(pauloCoelho.indexOf("life")); // ==> returns 2