//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);// return an array with the values in an object
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let arr = Object.keys(object);// returns an array with keys in an object
    return arr.reduce((acc, value) => {// using the reduce method 
        if(value === arr[arr.length - 1]){// checking if its the last value in the array
            acc += value;// add value to acc
            return acc;// return acc
        }// default
        acc += value + " ";// add value to acc and a space after that
        return acc;// return acc
    },"");// set acc to a empty string

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = Object.values(object);// returns an array with values in an object
    return arr.reduce((acc, value) => {// using the reduce method 
        if(value === arr[arr.length - 1]){// checking if its the last value in the array
            acc += value;// add value to acc
            return acc;// return acc
        }
        if(typeof value === "string"){// checking if value is a string
            acc += value + " ";// add value to acc and a space after that
        }// default
        return acc;// return acc
    },"");// set acc to a empty string
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){// checking if its an array
        return "array";// return string array
    }// default
    return "object";// return object
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);// using slice method to cut out the first character and capitalize it and then using
    // slice to add the rest of the character
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {``
    let arr = string.split(" ");// separate into an array each word
    return arr.reduce((acc, val) => {//using reduce to return a string with each word capitlized
        if(val === arr[arr.length - 1]) {// checking for last value in the array
            acc += val.slice(0, 1).toUpperCase() + val.slice(1);// capitalized value of val is added to acc
            return acc;// return acc
        }
        acc += val.slice(0, 1).toUpperCase() + val.slice(1) + " ";// capitalized value of val and a space is added to acc
        return acc;// return acc
    }, "");// default of acc is a string
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + object.name.slice(0, 1).toUpperCase() + object.name.slice(1) + "!";// return string with value capitlized at key name in object
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name.slice(0, 1).toUpperCase() + object.name.slice(1) + " is a " + object.species.slice(0, 1).toUpperCase() + object.species.slice(1);
    //return a string with value at key name catitlized added string  is a  plus value at the key species capitlized 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(!object.noises){// checking if object has a key named noises
        return "there are no noises";// return there are no noises
    }
    if(!object.noises.length){// checking if there are values at key noises in the object
        return "there are no noises";// return there are no noises
    }// default
    return object.noises.reduce((acc, val) => {// return the value at key noises in object using reduce
        if(object.noises[object.noises.length -1] === val){// checking for last value in the array
            acc += val;// add val to acc
            return acc;// return acc
        }
        acc += val + " ";// add val to acc and add a space also
        return acc;// return acc
    }, "");// set acc to empty string
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);// checking if string has word in it with method .includes which returns true or false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);// pushing name in the object at key friends value
    return object;// return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(!object.friends){// checking if object has a key named friends
        return false;// return false
    }// default
    return object.friends.includes(name);// return the value at key friends in the object with method .includes which returns true or false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let friends;// create a varible name friends
    let final = [];// create a varible name final and set it to an empty array
    array.map(val => {// using map method to loop over the array
        if(val.name === name){// check if val at key name is equal to name value
            friends = val.friends;// set friends to array at friend key in val
        }
    });
    array.map(val => {// using map method to loop over the array
        if(val.name !== name && !friends.includes(val.name)) {// checking if value at key name is not equal to name and if name is in friends array
            final.push(val.name);// push value at key name in final
        }
    });
    return final;// return final
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;// assign value at key in object
    return object;// return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    array.map(val => {// using array . map to loop over array
        delete object[val];// delete every key that shares name with val in object
    });
    return object;// return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return array.reduce((acc, val) => {// return array with the reduce method
        if(!acc.includes(val)){// checking if acc has val in it
            acc.push(val);// push val in acc
        }
        return acc;// return acc
    }, []);// set acc to a empty array
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}