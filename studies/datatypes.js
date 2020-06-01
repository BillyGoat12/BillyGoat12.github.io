/*
*
*
*
********************************************************************************
*                               DATA TYPES                                     *
********************************************************************************
*
*
*
* Data Types  -  are values that are assigned to variables. 
* In JavaScript we have two types of data types: 
* - primitive : null, undefined, boolean, number, string,
* symbol. 
* - complex data: object, array.  
*/
var day = 'sunday'; // day has value of string
day = 'true';       // day now has boolean value    
day = 22;           // day now has number value
// Primitive //
/**
* Undefined - It is primitive data, when variable is declared and * not yet has
* not yet value assigned, automatically by default,
* has the value of undefined.  
*/
var day; 
console.log(day);    // prints => undefined
/**
* Null - also has only one value, it defines that null is an
* empty object, contains nothing in it but is still consider
* value.
*/
console.log(null == undefined); // prints => true
var age = null;
console.log(age); // prints => null
/**
* Number - holds numeric values. 
* Any number value: positive, negative, or with decimal points.
* With numbers we can: add, subtract, divide, multiply.
* we can manipulate numeric values using arithmetic expressions
* Additionally, in JavaScript there is Infinity and - Infinity 
* it represents the finite numbers, on both sides negative and
* positive. When we add or multiply by Infinity, it will return Infinity. 
* Any positive number when divided by Infinity will return zero.
* Any infinity value that is multiplied by negative value will return -Infinity.
*/
var isInfinity = Infinity;
console.log(isInfinity * 2); // prints => Infinity
console.log(isInfinity + 123); // prints => Infinity
console.log(9 / isInfinity); // prints => zero
console.log(isInfinity * -5); // prints -Infinity
var myNum = 5; // regular number
var num = 1.5; // Decimal number
var sum = myNum + num; // Mathematical Expressions
console.log(sum); // prints => 6.5
/**
* String -  represents a sequence of characters in the quotation,
* it has a length property, fist character starts at 0 index
* location. To manipulate string we can use ‘+’ operator. 
*
*/
var string = "dog";
console.log(string); // prints => prints dog
var string1 = "cat";
var animals = string + 'and' + string1;
// concatenation of 2 strings, and returns new value
console.log(animals); // prints => dog and cat 
/**
* Boolean - represents two values only: true or false. 
* In JavaScript we can convert other data types to boolean value.
* string => non-empty string => true
* string => empty string => false
* number => non-zero number or Infinity => true
* number => 0 and NaN => false
* object => non-null object => true
* object => null => true
* undefined => undefined => false
*/
var boolean1 = false;
console.log(boolean1); // prints => false
var isGreater = 7 > 1;
console.log(isGreater); // prints => true
// Complex Data Type //
/**
* Object - represents collection of properties, which are
* key-value pair. Key is always a string, and the value of a key
* can have any data type, it can also be an object. 
* Object properties can be accessed two ways: 
* - dot notation (.)
* - bracket notation ([ ])
* New object can be created by creating object literal, but also
* can be created by the keyword new. 
* It is important to know that all objects in JavaScript come
* form Object type, and we copy objects by reference. 
*/
//declare an object literal
var myObj = {};
//add keys to an object
//dot notation
myObj.city = 'New York';
console.log(myObj); // prints => {city: 'New York'}
//bracket notation
myObj['school'] = 'Operation Spark';
console.log(myObj); // prints => {city: 'New York', school: 'Operation Spark'}
//hardcoding objects
var personDetails = {
  name: 'Billy',
  age: 21,
  hobbies: ['gaming', 'reading'],
  stats: {height: 5.8, weight: 175},
  marriedStatus: false
};
console.log(personDetails); 
/* prints => {name: 'Billy', age: 21, hobbies: ['gaming', 'reading'], 
stats: {height: 5.8, weight: 175}, marriedStatus: false} */
//accessing values
console.log(personDetails.age); // with dot notation // prints => 21
console.log(personDetails['hobbies']); 
// with bracket notation // prints => ['gaming', 'reading']
console.log(personDetails.hobbies[1]); 
// accessing array of hobbies at index 1, with dot notation prints => reading
console.log(personDetails.stats.height); 
// accessing object stats for key name height, using dot notation prints => 5.8
//changing values
personDetails.name = 'Billy T. Nguyen';
console.log(personDetails.name); // prints => Billy T. Nguyen
/**
* Arrays - complex data types they store multiple data types,
* they have length property, it starts at 0 index location. 
* We copy arrays by reference, they can hold other data types,
* like: String, Number, Booleans, Other Arrays, and Objects, and
* Functions. To access arrays we use bracket notation ([]).
*/
//declare an array literal
var myArr = [];
console.log(myArr); // prints => []
//hard coding values inside of an array
myArr = [3, 'string', true, ['array inside of array', 2, false ]];
console.log(myArr);
// prints => [3, 'string', true, ['array inside of array', 2, false ]];
//update myArr with new value and check length of an array
var myArr = [true, 'green', false];
console.log(myArr.length)  // prints => 3
//check for last index of an array
console.log(myArr.length-1); // prints => 2
//check for position of index form the end
console.log(myArr[myArr.length-1]); // prints => false
//checks for position of the first index
console.log(myArr[1]); //  prints => green
//accessing values in an array (first value starts at 0)
console.log(myArr[0]); //  prints => true
//changing values
myArr[0] = 'new value';
console.log(myArr[0]); // prints => new value
//add values to the end of an array
var newArr = [1, true, 'movie', [22, 'dog']];
newArr.push(['push', 'pushArr']);
console.log(newArr); 
//prints => [1, true, 'movie', [22, 'dog'], ['push', 'pushArr']]
//remove values at end of an array
newArr.pop();
console.log(newArr); //prints => [1, true, 'movie', [22, 'dog']]
//add values to beginning of an array
newArr.unshift('add');
console.log(newArr);   //prints => ['add', 1, true, 'movie', [22, 'dog']]
//remove value from beginning of an array
newArr.shift();
console.log(newArr); //prints => [1, true, 'movie', [22, 'dog']]
/**
* Functions - represent a block of code designed to perform
* action once or multiple times.
*/
var add = function(n1, n2) {
   return n1 + n2;
};
add(2, 2); // prints => 4