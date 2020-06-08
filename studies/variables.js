/*
*
********************************************************************************
*                             VARIABLES                                        *
********************************************************************************      

* VARIABLES - hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/
// 1. declaration //
var myName;
/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined
// 2. initialization or assignment //
myName = 'Andy';
console.log(myName); // prints => Andy
// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob
// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
/*
* LET:
*
* 0. In Javascript, let declares variable that is restricted to a Block Scope. 
*Var and let are similiar in the way they are used. But, let is only accessable in the block that it is in. 
*Let can only be declared once within the same block scope. 
*
* 1. To create a variable we use the keyword, let , followed by a name (id or alias) for our
* variable.
*
* 2. There are 3 phases of using Let: declaration, initialization, and assignment.
*/
// 1. declaration //
let petName;
/*
* At the declaration phase, the variable myName will come back as a ReferenceError. It is because the variable is unininitialized. 
*/
console.log(petName); // prints => ReferenceError: variable is not defined
// 2. initialization and assignment  //
petName = 'Bud'
console.log(petName); // prints => Bud
// 3. re-assignment // 
petName = 'Jax';
console.log(petName); // prints => Jax
// re-assignment can only happen if it is in a new block scope. 
// NOTE: We can assign and re-assign anything to a variable in the loop, it will be used in the block that it is in but not strictly in the whole function. - we cannot do this with constants //
let name = 'Billy';
name = 'Bobby';
/*
* CONST:
*
* 0. Const is a constant reference to the value that is in the block scope. 
*The values can never be changed because it is not immutable. 
*It cannot be redeclared in the same scope. 
*
* 1. To create a variable we use the keyword, const , followed by a name (id or alias) for our
* variable.
*
* 2. There is only one phase of using variables: declaration/initialization (or assignment).
*/
// 1. declaration and assignment //
const playground = 'Bright'
/*
* The declaration and assignment is one phase, because a value is declared then assigned in one line. 
*/
console.log(playground); // prints => Bright
// 2. re-assignment //
const favNumber = 5;
// favNumber = 10; This will give an error 
// NOTE: We cannot reassign with constants //
/* HOISTING: 
*This is a very tricky part in J.S. 
*They're not physically moved to the top. 
*It is a few step process in which variable declaration happens first anywhere they are written.
*This process to ran to create memory. 
* 1. Var can be used before a variable is declared. 
* 2. Let and const cannot be used before a variable is declared.
*/
// 1. Var 
var animal;
console.log(animal);
animal = 'dog'; 
/* When the code is run, it will create the space for the variable.
*It will happen before the variable has a value. Variable decelaration runs first. 
* Initialization are not hoisted. The varaible must be declared at the top!
*/ 
// prints => undefined 
// 2. Let and Const 
// Let and Const can only be hoisted when thse variable is declared on the same line.
// console.log(tutorName);
let tutorName = 'Miguel';
console.log(tutorName);// prints Miguel
console.log(college);
/* This will print out ReferenceError: tutorName/college is not defined.
* It is not defined , because a ReferenceError will stop running the code. 
*/
const college = 'UNO';
console.log(college);// prints UNO