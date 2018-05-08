'use strict';

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

/**
Create a function called filter, which takes two arguments: ok
First argument is an array: arr ok
Second argument is a function: fn ok
This function exists to return a new array, so create a newArray initialized to []; ok
Now start a loop through the arr passed in ok

Inside the loop:
Write an if statement that checks if invoking the fn function while passing in the current element of arr returns true 
If it does, then push the current element of arr into our newArray
Finally, outside the loop, we return newArray
Try calling your filter function using the myNames array above and test that it works
 */

 function filter(arr, fn) {
     let newArray = [];

     for(let i = 0; i < arr.length; i++) {
         if(fn(arr[i])) {
             newArray.push(arr[i]);
         } 
     }

     return newArray;
 }

 function checkForR(word) {
     if(word[0] === 'r' || word[0] === 'R') {
         return true;
        }
 }

 console.log(filter(myNames, checkForR));