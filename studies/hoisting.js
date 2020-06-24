/*
*
*
* 
********************************************************************************
*                               Hoisting                                       *
********************************************************************************
*
*
*
* Hoisting - Hoisting is a JavaScript mechanism where variables and function 
* declarations are moved to the top of their scope before code execution.
* 
*
*   The way JavaScript works, is that the 1st thing the program does when it runs is the program, it will
*   scan all of the files and then create a "reference" of all the function (indluding the variables) as well as
*   an variables declared using the var, let or const declaration and move them to the top of the global/functional/local scope.
*
* 1. Variable hoisting - How are variables hoisted in JavaScript?
*   a) var
*/
console.log(name);               // When this program begins, it will scan the entire program and bring variables
var name = 'Billy';              // and functions to the top. But only as a reference of the declaration. 
                                // When, declaring a variable using var, the declaration of name will move to the top
                                // What the program sees:        // of the global scope but not be initilized. And will be assigned a property of the
                                // window object. 
var name;                        // => undefined
console.log(name);               // in this case, the ouput will be 'undefined'
var name = 'Billy'

/*
*   b) let
*/
console.log(laptop);              // When a let declaration is hoisted, there will be a different output as let will not be
                                // accesible in the global window object and will get...
let laptop = "ASUS";          // => ReferrenceError 
// What the program sees:
//  let laptop;
//  console.log(laptop)
//  let Laptop = "ASUS"
/*
*   c) const
*/      
console.log(Game);                    
const Game = "League of Legend"        // => Cannot access 'game' before initilization
                                            // A difference between const and let/var is that you must declare and initilize
//what the program sees                     // If the variable is not initilized, the previous message will appear
//  const Game;                       // Since the variable motorcycle is hoisted and will not be initilized,
//  console.log(Game)                 // an initilization messge will be displayed
// const Game = "League of Legend"

/*
* 2. Function Declarations
*   Function Declarations are hoisted to the top and even though a Function may be declared at the end of the code, you will
*   be able to run the code on the 1st line.
*
*/
print(name);                                  // => Billy
                                            // the funcion was declared after the initilization.
function Print(some) {
    return console.log(some)                // will return some
}

/*
* 3. Function Expressions
*   Function expressions work just like var, let and const. The variables will be hoisted as declared, but not initilized 
*
*/
Hello();                            // => Cannot access 'Hello' before initilization
const Hello = () => {               // var will return Hello is not a function
    return `Hello user`             // returns Cannot access 'laptop' before initilization
}  

/*
* What is the JS Interpreter?
*   Where instructions from the program source will grab a line of code and convert is to machine code, then go back
*   and grab more code to convert to machine code. This is an alternative option of a compiler. A compiler will take 
*   all of the code and convert it to machine code all at once. 
*/