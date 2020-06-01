/*
*
********************************************************************************
*                             VARIABLES                                        *
********************************************************************************      
*
* VARIABLES - To hold things in memory during the life-cycle of a program, we can use 
* variables.  Variables are named identifiers that can point to values of a 
* particular type, like a Number, String, Boolean, Array, Object or another 
* data-type.  Variables are called so because once created, we can CHANGE the 
* value (and type of value) to which they point.
* 1. To create a variable we use the keyword, var, followed by a name 
* (id or alias) for our variable.
* 2. There are 2 phases of using variables: declaration and initialization 
* (or assignment).
*/
// 1. declaration //
    var myBandName;
/*
* At the declaration phase, the variable myBandName is undefined because we 
* have NOT initialized it to anything
*/
 
    console.log(myBandName); // prints => undefined
// 2. initialization or assignment //
    myBandName = 'the bunkers';
    console.log(myBandName); // prints => the bunkers
// 3. re-assignment //
    myBandName = 'rush';
    console.log(myBandName); // prints => rush
// NOTE: We can assign and re-assign anything to a variable - 
// we cannot do this with constants 
    var myVariable = 1;
    //var myVariable = true;
    myVariable = "someString";
    console.log(myVariable); // ==> returns "someString"
// 4. var, let, cosnt //
// a. var
/* 
* 'var' is a function scoped but it can be declared in any scope. 
* You can reassign and redeclare the variable multiple times. 
*/
    var pet = 'cat';
    pet = 'dog'; // with 'var' you can redeclared the variable
    console.log(pet); // ==> returns 'dog'
// b. let
/*
* 'let' is scoped to the block level and not to the function level. 'let' can be
* reassigned but not redeclared. 'let' is hoisted to the top of the scope but not
* available until the declared line.
*/
// can be reassigned but not redeclared
    let hungryFor = 'pizza';
    hungryFor = 'burger'; // let can be reassinged
    console.log(hungryFor); // returns ==> burger
    let color = 'blue';
    //let color = 'red'; // with 'let' you can't redeclare the variable
    console.log(color);  
// returns => SyntaxError: Identifier 'color' has already been declared
// c. const 
/*
* acts like let because it is scoped to the block level and it is hoisted to 
* to the top of the scope but available until the declared line. The difference 
* is that 'const' can't be reassinged or redeclared but you can change the 
*properties of the object or array.
*/
    // can't be reassigned or redeclared
    //const rabbitLikes = 'carrot';
    //rabbitLikes = 'peruvian food';
    //console.log(rabbitLikes);
    //returns ==> TypeError: Assignment to constant variable.
    //const iWant = 'coffee';
    //const iWant = 'tea';
    //console.log(iWant); 
    // returns ==> SyntaxError: Identifier 'iWant' has already been declared
// 5. Hoisting //
/*
* Hoisting means that variables are moved to the top of their scope before 
* execution. It doesn't matter where the variables are declared, they are moved 
* to the top of their scope regarless if their scope is global or local. The 
* difference is the variables defined with 'lets' and 'const' can't be accessed
* before they are declared but 'var' can.
*/
    //console.log(batman);
    //var can be accessed, var goes to the top of the scope
    //var batman; // ==> returns 'undefined'
    //console.log(robin);
    /* with let and const even thou it goes to the top of the scope it can't be 
    accessed */
    //let robin; // returns ==> ReferenceError: batman is not defined