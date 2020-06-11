/*
*
*
* 
********************************************************************************
*                                Scopes                                        *
********************************************************************************
*
*
*
* Scopes - scope refers to what variables or constants are accessible. There are
* basically two type of scope which are global and local.
*
*/

// Global scope //

/*
* This is anything outside of functions and can be accessed within a scope of any other 
* scope. Functions can access varible in their parents scope but parents can not access
* varible in their child scope
*/

let val = 0;
let add = () => {
    val++;
};
console.log(val);// prints 0 
add();// use the function add
console.log(val);// prints 1

/*
* val is a variable in global scope and is accessible in the scope of add
*/

// local scope//

/*
* local scope refers to anything that is derclaired with in the body the body
* function encloses a scope to protect their variable from parent scope
*/

let num = () => {
    let b = 5;// derclaired b with the scope
};
console.log(b)// throws reference error 

// Nested scope//

/*
* functions forming with in function can form nest scopes because of the derclarations of 
* variables are in different blocks
*/

let adding = () => {
    let a = 5;// set a to 5
    let add5 = () => {// created a new function
        a += 5;// adding 5
    };
    add5();// calling the function
    console.log(a);// prints 10
};
adding();// calling the function

// parent scope still do not have access to child scope in nested scopes

let value = () => {// created a function
    let values = () => {// created function
        let c = 5;// set c to value 5
    };
    values();// calling values function
    console.log(c)// prints reference error
};
value();// calling value function

