// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-billygoat12');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return array.filter((val) => {//using reduce to loop over array
        if(val.gender === "male"){// checking if val at key gender is equal to male
            return val;//return val
        }
    }).length;// set acc to 0 by default
};

var femaleCount = function(array) {
    return array.reduce((acc, val) => {//using reduce to loop over array
        if(val.gender === "female"){// checking if val at key gender is equal to female
            acc++;// add 1 to acc
        }
        return acc;// return acc 
    }, 0);// set acc to 0 by default
};

var oldestCustomer = function(array) {
    let num = 0;// set num to 0
    return array.reduce((acc, val) => {// loop over the array
        if(num < val.age){// checking if num is less then age
            num = val.age;// set num to value at key age
            acc = val.name;// set acc to value at key name
        }
        return acc;// return acc
    }, "");// set acc to empty string by default
};

var youngestCustomer = function(array) {
    let num = 100;// set num to 100
    return array.reduce((acc, val) => {// loop over the array
        if(num > val.age){// checking if num is more then age
            num = val.age;// set num to value at key age
            acc = val.name;// set acc to value at key name
        }
        return acc;// return acc
    }, "");// set acc to empty string by default
};

var averageBalance = function(array) {
    return array.reduce((acc, val) => {// loop over the array
        acc += parseFloat(val.balance.replace(/[^0-9.-]+/g, ''));// add the value of balence and turn balence into a number
        return acc;// return acc
    }, 0) / array.length;// divid the output by the length of the array
};

var firstLetterCount = function(array, letter) {
    return array.reduce((acc, val) => {// loop over the array
        if(val.name[0].toUpperCase() === letter.toUpperCase()){// check if letter and first character of name are the same
            acc++;// add one to acc
        }
        return acc;// return acc
    }, 0);// set acc to 0 by default
};

var friendFirstLetterCount = function(array, customer, letter) {
    return array.reduce((acc, val) => {//loop over the array
        if(val.name === customer){// check if value at key name is the same as customer
            acc = val.friends.filter(val => {// set acc to the output and loop over the friends array
                if(val.name[0].toUpperCase() === letter.toUpperCase()){// check if the name first character is the same as letter
                    return val;// return this value
                }
            }).length;// return the length of this array
        }
        return acc;// return acc
    }, 0);// set acc to zero
};

var friendsCount = function(array, name) {
    return array.reduce((acc, val) => {// loop over the array
        val.friends.map(value => {// looping over the friends array
            if(value.name === name){// checking if value at key name is name
                acc.push(val.name);// push val.name into acc
            }
        });
        return acc;// return acc
    },[]);// set acc to empty array by default
};

var topThreeTags = function(array) {
    let tag1 = _.reduce(array, function(tagsObj, current) {
        let arrayOfTags = current.tags;
        _.each(arrayOfTags, function(tag) {            if (tagsObj[tag]) {
                tagsObj[tag]++;
            } else { //if none just set the tag count equal to 1
                tagsObj[tag] = 1;
            }
        });
        return tagsObj; //return our tags obj counts
    }, {});
    let arr = []; //create a holder var
    _.each(tag1, function(value, key, obj) {
        arr.push([key,value]); //for each tag push the key and value into our array
    });
    arr.sort(function(x, y) {
        return y[1] - x[1]; //sort our arr from top to bottom
    });
    var topThree = arr.slice(0, 3); //use the slice method to get rid of extra data because you only want the top 3
    let test = _.map(topThree, function(nested) { //run map as a test
        return nested[0];
    });
    return test; //finally return the test
}

var genderCount = function(array) {
    return array.reduce((acc, val) => {// loop over the array
        if(!acc[val.gender]){// checking if acc has gender value as a property
            acc[val.gender] = 1;// give acc that property and set its value to 1
        }else {// default
            acc[val.gender]++;// add one at acc value at that property
        }
        return acc;//return acc
    },{});// set acc to empty object by default
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
