// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {// return an obj
        id: id,// set id to id 
        nameFirst: nameFirst,// set nameFirst to nameFirst
        nameLast: nameLast// set nameLast to nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];// set contacts to an array
    
    return {// return an object
        // we implemented the length api for you //
        length: function() {// set length to a function
            return contacts.length;// return the length of contacts
        },
        addContact: function(obj){// set addcontacts to a function
            contacts.push(obj);// push obj to contacts array
        },
        findContact: function(str) {// set find contacts to a function
            let arr = str.split(" ");// set arr to and array holding the first name and last name
            let first = arr[0];// set first to the first name which is located in the array
            let last = arr[1];// set last to the last name which is located in the array also
            for(let i = 0; i < contacts.length; i++){// loop over the contacts array
                if(last === contacts[i].nameLast && first === contacts[i].nameFirst){// check the objects to see if the value at namelast is last and 
                // namefirst is first
                    return contacts[i];// return the object which is located in the array
                }
            }
        },
        removeContact: function(obj){// set remove contacts to a function
            for(let i = 0; i < contacts.length; i++){// loop over the array contacts
                if(contacts[i] === obj){// check if values in the array is equal to obj
                    contacts.splice(i,1);// remove that value from the array
                }
            }
        },
        printAllContactNames: function(){// set print all contacts name to a function
            let str = "";// set str to a empty string
            for(let i = 0; i < contacts.length; i++){// loop over the contacts array
                str += contacts[i].nameFirst + " " + contacts[i].nameLast;// add first name and last name with a space in between to str
                if(i !== contacts.length - 1){// check if its not the last value in the array
                    str += "\n";// add character the makes it a new line
                }
            }
            return str;// return str
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
