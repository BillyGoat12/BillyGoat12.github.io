/*
* 
********************************************************************************
*                             OPERATORS                                        *
********************************************************************************      
*
* 0. OPERATORS - It is a symbol used as in act of an operation.
* They are various amounts of operators: assignment, logical, arithmetic, comparison, unary, and ternary. 
* Each of these operators are designed to do a specific action! 
*/
 
// Assignment operators
// This operator assigns a value to a variable
// = , += , -= , *= , /= , %=
var laptop = 'Apple';
console.log(laptop);
// prints => Apple
// The variable laptop is assigned to Apple 
let x = 2;
// =  is assigning 2 to x
x += 1; 
console.log(x);
// prints => 3
// += is adding 1 to the value stored in x 
x -= 4; 
console.log(x);
// prints => -1 
// -= is subtracting 4 from the previous value in x
x *= 3; 
console.log(x); 
// prints => -1 
// *= is multiplying 3 from the previous value in x
// Arithmetic operators 
// This is a mathematical operator. 
// + , - , * , / , % , ++ , --
var sum = 5 * 5;
console.log(sum);
// prints => 25
// the sum is assigned to five times five 
// * is an arithmetic operator 
let sub = 5 - 5;
console.log(sub);
// print => 0
// using the - operator it will subtract five from five
let div = 5 / 1;
console.log(div); 
// print => 5
// using the / operator it will divide 1 from five
/* Comparison operators
// This is a logical operator that will result in difference or equality for values and variables. 
== equal to (loosely equal)
=== strictly equal
!=	not equal	
!==	not equal value 
>	greater than	
<	less than	
>=	greater than or equal to	
<=	less than or equal to	
*/
// strict comparision: using three = 
// it is a comparision between the value's data types. It will return a boolean value, based on those two camparision
console.log('2' === 2);
// Prints => false
// In this example, it is strictly comparing data types. On the left side, it is a string and on the right side, it is a number. 
// loose comparision: using two = 
// Compares if two values are the same, and will return a boolean value.  It does not compare the value's data type. 
console.log('2' == 2);
// prints => true
// It prints true because the values on each side of the loose operator is the same
// less than: <
let a = 1;
let b = 2; 
console.log(a < b);
// prints => true
// This will print out a boolean value of true, because a is less than b. 
/* Logical operators
In conditional statements, logical operators are used to compare each condition.
This operator will result in a boolean values. 
It will determine the logic behind the condition. 
&& and 
|| or 
! reverses the output of the boolean value 
*/

let year = 2020;
if (year === 2020 && year > 2019){
  console.log(true); 
}
// prints => true
// This is true because both of the conditions are met 


if (year === 2020 || year < 2019){
  console.log(true); 
}
// prints => true
// This is true because at least one of the conditions are met


if( 2019 < year && year != 2018){
  return true;
  }else{
  return false;
} 
  // prints => true
  // It is true because, the boolean output was reversed from the bang operator. It was false, but it became true.
  
  
// Unary operators (!, typeOf, -)
// typeof will return the variable's data type
var string = 'This is a string'
typeof string; 
// print => string 
// this will print out string because it is a string data type
// Logical Not ! 
// It will change a boolean value and return it to it's opposite value 
!true 
// prints => false 
// this will print false, because on line 69 it uses the reverse of the boolean output 
// Unary negative
// It will return a non-number data type to a negative.
-true
// prints => -1 
// because it will print out a negative number
// turning a positive values into a negavtive value: 
let positive = 2;
positive = -positive 
console.log(positive);
// prints => -2 
// the negative sign in front of the variable will make the value become negavtice 
// Ternary operator (a ? b : c)
// condtion ? value if true : value if false 
// It is just like an if, else statement but a shorter way. 
var f = 5, e = 4, c; 
c = (f < e) ? f : e;
// prints => 4
// the statement is true so it will run the argument before the semicolon