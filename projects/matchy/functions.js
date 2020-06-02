/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var search = function (array, string) {// created a search function that takes in an array and a string
    return array.reduce((acc, value) =>{// return the array with the reduce method attached
        if(value.name === string){// check if the object name is equal to the string
            acc = value;// set the acc to that object
        }
        return acc;// return the acc
    }, null);// default acc is null
};

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var replace = function(array, string, object) {// created a function that replace a value in the array
    for(let i = 0; i < array.length; i++){// looping over the array
        if(array[i].name === string){// checking if the value in the array has a key name with the same value as string
            array.splice(i, 1, object);// using .splice method to replace the value at i index with object
        }
    }
};

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var remove = function(array, string) {// created a function that deletes a value in an array
    for(let i = 0; i < array.length; i++){// looping over the array
        if(array[i].name === string){// checking if the value in the array has a key name with the same value as string
            array.splice(i, 1);// using .splice method to delete the value at i index
        }
    }
};

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var add = function(array, object) {// created a function named add that adds an object to an array
    if((object.name.length) && (object.species.length)){// checking if the object has a value name and species
        for(let i = 0; i < array.length; i++){// looping over the array
            if(array[i].name === object.name){// checking if the values in the array shares names with the object
                return;// return to break out the function
            }
        }
        array.push(object);// default pushes the object into the array
    }
};

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
