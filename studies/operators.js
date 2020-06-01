/*
* 
********************************************************************************
*                             OPERATORS                                        *
********************************************************************************      
* 
* 0. OPERATORS - does an operation on a single or multiple values and produces 
* a result from left to right.
* 1. An Operator manipulates vales and are used to do mathematical and logical
* operations.
* 2. There are different kinds of operators : Assignment operators , Arithmetic 
* operators, Comparison operators, Logical operators ,Unary operators and
* Ternary operator
*/
 
// 1. Assignmet Operators //
 
/* 
* Performs an operations to a variable to the left based on the value of 
* the right operant 
*/
 
 var x = 8; // the equal sign assigns 8 to x
 // += adds a number to x which is equal to 8
 console.log(x += 1); // ==> returns 9
 // -= susbstracts a number from x which is equal to 9
 console.log(x -= 5); // ==> returns 4
 // *= multiplies x with a number 
 console.log(x *= 20); // returns 80 
 // /= divides x by a number 
 console.log(x /= 5); // returns 16 
 // %= shows if there is a remeinder 
 console.log(x %= 5); // returns 1, there are three 5's in 16, remainder is 1
 
 
// 2. Arithmetic Operators //
 
/* 
* Arithmetic Operators perform simple Arithmetic equations. 
*/
 
var y = 15;
var z = 10;
 
 console.log(y + z); // adds 15 plus 10 ==> returns 25
 console.log(y - z); // substracts both variables ==> returns 5
 console.log(y * z); // multiples both variables ==> returns 150
 console.log(y / z); // 15 divided by 10 ==> returns 1.5
 console.log(y % z); // returns 5, one 10 in 15, remainder 5
 console.log(++y); // y plus 1 ==> returns 16
 console.log(--z); // substracts 1 from z ==> returns 9
// 3. Comparison Operators // 
/* 
* Comparison Operators compares two values to return a true or false result.
* There are many different types of comparison operators like equality,
* inequality, greater than or less than comparisons. There is equality 
* which changes the operants type and then makes a comparison and
* strict equality which has to be completely equal. 
*/
 
 
// == is equal 
 console.log(1 == 1); // returns true
 console.log(1 == '1'); // convert the operant and returns true
// === stricly equal 
 console.log(2 === 2); // returns true
 console.log(2 === '2'); // stricly equal doesn't convert it, returns false 
// != not equal
 console.log(3 != 3); // returns false because they are equal 
 console.log(3 != '3'); // convert the operant and return false
// !== stricly not equal
 console.log(4 !== 4); // returns false because they are equal
 console.log(4 !== '4'); // returns true because they are not stricly equal
// > greater than 
 console.log(5 > 3); // returns true because 5 is greater than 3
 console.log(2 > 5); // returns false because 2 is not greater than 5
// >= greater or equal than
 console.log( 6 >= 6); // returns true because 6 is greater or equal to 6
// < smaller than
 console.log(10 < 9); // returns false because 10 is greater than 9
 console.log(9 < 10); // returns true because 9 is smaller than 10
// <= smaller or equal than
 console.log( 3 <= 3); // returns true because 3 is greater or equal to 3
// 4. Logical Operators //
/* 
* This operator returns a true or false depending if the conditions has been 
* met. There are 3 different kinds: AND(&&), OR(||), NOT(!).
*/
// AND(&&)
 function myGrade(test) {
 /* Here is && which says that if test is more or equal than 90 
 AND(&&) less or equal to 100 you get an A */
 if(test >= 90 && test <= 100) { 
 return 'You got an A';
 } else {
 return 'study more';
 }
 }
 console.log(myGrade(95)); // returns 'You got an A'
// OR(||)
 function myNewCar(car) {
 //You put or, so that means you can pick an Audi or a BMW
 if(car == 'Audi' || car == 'BMW' ) {
 return "Buy it!!";
 } else {
 return "na, don't buy it";
 }
 }
 console.log(myNewCar('BMW')); // returns Buy it!!
 console.log(myNewCar('Audi')); //returns Buy it!!
// NOT(!)
 function youFailed(grade) {
 /* if grade is not equal to 0 then it will print'well at 
 least you didn't get a zero */
 if(grade != 0) {
 return "well at least you didn't get a zero";
 } else {
 return "jeez...";
 }
 }
 console.log(youFailed(0)); // ==> returns jeez...
// 5. Unary Operators //
/* 
* Most operators are binary with means they need two operators but urany 
* operator means that it only needs one. We have type of which i will show you
* the the data type in string form. Then we have the - sign which shows you if a
* number is negative or -- sign which it will decrease a number by one and then 
* the + sign that will show you if the number is positive or ++ which will add
* a one to your number. 
*/
 var a = 3;
 var b = 8;
 
 console.log(++a); // y plus 1 ==> returns 4
 console.log(--b); // substracts 1 from z ==> returns 7
 // initialized and assign my string and number
 var myString = 'sesquipedalian';
 var myLuckyNumber = 89348308242;
 console.log(typeof myString); // ==> returns string
 console.log(typeof myLuckyNumber); // returns number
// 6. Ternary operator // 
/* 
* Ternary is the only operator that takes three operands and it test a 
* conditions and returns one value if it is true and another if it is false. 
*/
 var earth = false; // earth is false
 // it will test the condition and see if it is true and then if it is false
 console.log((earth) ? "you are from from Earth" : 'you are from Mars!!'); 
 // earth is false so it returns 'you are from Mars!!'