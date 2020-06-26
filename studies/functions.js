/*
*
*
* 
********************************************************************************
*                               FUNCTIONS                                      *
********************************************************************************
*
*
*
* Functions - are wrapped block of code that can be reused over and over, 
* and we do not have to rewrite the entire code every time we need to repeat. 
* JavaScript has many built in functions like console.log or methods that are
* also functions push() and pop().
* To create function, we need to start with keyword function, follow by the name
* (whatever we name it), and we can pass parameters inside the parentheses (), 
* functions accept zero or more parameters, lastly in curly braces we can input 
* code for action we want the function to perform.
* This is called function declaration. 
* 
*/
//Function declaration, zero parameters and calling function//
function greeting(){
}
console.log(greeting());  // prints => undefined
//Function declaration, one parameter and calling function //
function number(x){
 console.log(x);
}
number(5);           // prints => 5
/**
* Function expression on the other hand does not have the name and has 
* an anonymous function and is assigned to variable. 
* It can be IIFE - Immediately Invoked Function Expression and runs when
* defined. Expresions are not hoisted like functiondeclaration. 
*/
// Function expression with two parameters
var add = function (n1, n2) {
	return n1 + n2;
};
add(2, 5);         // prints => 7
/**
* Parameters and Arguments - often confused, parameters are place
* holders for arguments. We pass parameters at the time of function
* declaration or expression, and arguments are values that
* parameters receive when a function is invoked. 
* In above example of add function expression, 2 and 5 are values
* that were passed to parameters.  
*/
 
/**
* Hoisting - is pulling up. In JavaScript it means that function
* can be used before is declared, but only function declaration,
* and not function expression. 
*/
 
myName(); // an hoisting example
 
function myName(){
    console.log('My name is an hoisting example');
}
myName();
/**
* Scope - defines how and where variables can be accessed and used. 
* In JavaScript there are three scopes: global, local/function, and 
* block scope.
* /
/**
* Global Scope - refers to a window object of JavaScript.
* When variables is declared outside of function, it has global scope,
* They are global variables. 
*/
var num = 10;    // has global scope and we can access form any scope.
/**
* Local Scope - also called function scope, variables that are declared
* inside a function. Variable var is bound to local scope when declared
* inside. 
*/
var name1 = 'Tom';
function student() {
    var name1 = 'Bill';
    console.log(name1);       // prints => Bill, from local scope
}
student();
console.log(name1);             // prints => Tom, form global scope
/**
* Block Scope - refers to variables declared in block scope, like 
* conditional statements or loops. Let and Const are variables that 
* are used in block scope. 
*/
function studentHistory(name) {
    if(name) {
        var subject = 'JavaScript'; // block scope
        console.log(subject);         // prints => JavaScript
    }
    
console.log(subject); //prints => ReferenceError as is outside of local scope. 
}
studentHistory();
/*
* Closure - is present, when function is referencing variable in outer 
* scope than they are declared. It stucks in outer scope inside the
* inner. 
*/
function students() {
let name1 = 'Raymon'; // name1 is local variable in parent scope
function studentMath() { 
    // studentMath is closure in the student function
        let subject = 'JavaScript'; // block scope
        console.log(name1 + ' ' + 'is learning' + ' ' + subject);        
         //the name1 variable from local student scope is avilable here
}
studentMath();  // call inner function so it will start its task
}
students(); // call outher function so it will start its task

// we can specify the output value of a function with the return keyword followed by a value //

let identity = value => {
    return value// returns the input unchanged
}






