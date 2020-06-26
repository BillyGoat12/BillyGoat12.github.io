/*
*
*
* 
********************************************************************************
*                                Scopes                                        *
********************************************************************************
*
* Scopes - scope refers to what variables or constants are accessible. There are
* basically two type of scope which are global and local.
* Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
* Variables defined within a function cannot be accessed outside the function anywhere because they are defined within the scope
* of that function (local scope). But, a function can access variables from it's parent and or global scope. If you define a 
* function under global scope, all of the variables are accessible in global can be used by the function. If another function 
* is defined within that function, the new function can access the variables of it's parent function and so forth. 
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

let num = () => { // Now, defining a function of num and in it, assigning the variable b
    let b = 5; // to the value of 5. This value is only accesible within the block of the function
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

// Block Scope
let test = 5
if (test) {                               // A conditional statment is considered block scope. Both Const and Let are block scope
    let test = 10                         // meaning that if a varibale, such as test, is assigned a value 10 it is only 
    console.log(test)                     // accessible within the block of the conditional statement. 
}                                               
console.log(test) // => 5                 // Even though in this code there is a function referencing the test variable as well
                                          // as a conditional statement that also changes the value, the global variable is what 
                                          // is accessed



/*
* What variables are bound to those scopes?
*   There are 3 variable keywords used for defining a variable var, let & const. Each with different attributes. Var has the least
*   restrictions. Variables declared using the var keyword are globaly scoped. Meaning they can be accessed and updated anywhere that is
*   NOT a function. 
*/
    // VAR
    var scope = "Global"                         //  var is global scoped, so creating a variable of scope will be accessible througout
    function localScope() {                      // inside of this function scope will equal "Local" but you will not be able to access
       var scope = "Local"                       // it ouside the function as it is Local scoped
       console.log(scope)                        
    }                                               
    if (scope === "Local") {                     // This conditional statement is trying to access the Local scoped scope variable but
        var scope = "Local & Block"              // since it cannot the else statment will execute
    } else {                                        
        var scope = "Only Global"                // the scope variable is now updated to "Only Global" and will be accessible throughout
    }                                            // as the var keyword is NOT Block scoped. 
    console.log(scope)  // => "Only Global"      // The output of "Only Global" as is was reassigned in the conditional statement.    
/*
*   CONST
*       const is similar to that of let above except that variables declared using the const keyword are not able to be reassigned a different 
*       variable and will thus get an error.
*
* There is a variable in the global scope and a parameter with the same name, if you are within the function body which would you access? 
* If you were in the global scope which would you access? Why?
*/
    const example = true;          // declaring a variable with true    
    function testFunc() {          // declaring a testFunc function    
        const example = false      // reassigning the test variable to false    
        return example             // returning the value of test
    }                           
    console.log(example)       // => true      // the variable example is not accesible from the local scope and thus will reach out to the global scope    
    console.log(testFunc())    // => false     // within the local scope of the function, the value of example = false    
    
    
    