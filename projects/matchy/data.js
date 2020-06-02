/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};// created a animal object
animal.species = "dogs";// assigned value dogs to key species
animal[`name`] = "Bud";// assigned value bud to key name
animal[`noises`] = [];// assign value empty array to key noises
console.log(animal);//logging animal to the console

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];// created a empty array
noises[0] = "bark";// at the first index add value bark
noises[noises.length] = "growl";// at the end of the array add value growl
noises.unshift("howl");// at first index add value howl
noises.push("woof-woof");// at the last index add value woof woof
console.log(noises.length);// logging the noises array length to the console
console.log(noises[noises.length - 1]);// logging the last value in the noise array to the console
console.log(noises);// logging the array to the console

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal[`noises`] = noises;// setting the noises array in the object to the noises array in global scoop
animal.noises.push("ruff-ruff");// adding a value to the noise array in object
console.log(animal);// logging to the console the animal object

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * you can access an object through bracket notation or dot notation
 * 2. What are the different ways of accessing elements on arrays?
 * you can access an array through bracket notation or through methods such as push or shift
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];// creating a animal array
animals.push(animal);//pushing animal obj to the animals array
console.log(animals);// logging animals to the console
var duck = {// creating a object with key values pairs
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);// pushing the new object into animals array
console.log(animals);// logging the animals array
var cat = {// creating a object with key values pairs
    species: 'cat',
    name: 'Randy',
    noises: ['meow', 'mew', 'purr', 'hissing']
};
var chicken = {// creating a object with key values pairs
    species: 'chicken',
    name: 'Andy',
    noises: ['cock-a-doodle-doo', 'Buck-buck-buck', 'Growling', 'Purring']
};
animals.push(cat, chicken);// pushing both of the new obj into the animals array
console.log(animals);// logging the animals array into the console
console.log(animals.length);// logging to the console the length of the animal array

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i choosed array because it better then objects when pertaining to an orgainized list
var friends = [];// creating a friends array
var getRandom = function(array) {// creating a function
    return array[Math.floor(Math.random() * (array.length - 1))]; // returns a random value in the array
};
friends.push(getRandom(animals).name);// pushing a random name into the friends array
console.log(friends);// logging friends array into the console
animals[Math.floor(Math.random() * (animals.length - 1))]["friends"] = friends;// adding the friends array to the key friends in a random index in animals array
console.log(animals);// logging the animals array into the console

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}