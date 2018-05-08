'use strict';

/*
Our task is to create multiple versions of a "hazard alert", which tells you the location of 
the hazard and how many times that hazard has issued an alert. 
We're using functions as return values to create closures. 
Each hazard warning is going to exist in its own closure so we can separately 
track how many times each warning has been issued.

Create a hazardWarningCreator function which takes one argument typeOfWarning
Inside the function, create a warningCounter variable that initializes at 0
Would a number variable expected to change be let or const?
Return an anonymous function, which takes one argument location
Inside the inner function:
Increment warningCounter
Answer out loud: Why does the inner function have access to warningCounter? Because of scope chain.
Log out: "DANGER! There is a ${typeOfWarning} hazard at ${location}!"
Log out the message: "The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"
Remember: string interpolation above requires a special character, not ' or "
Now let's invoke hazardWarningCreator three times, catching the returned function in separate variables, such as:
const rocksWarning = hazardWarningCreator('Rocks on the Road');
(you create two more of your choice)
Finally, invoke each of your newly created hazard warning closures several times at different locations:
*/
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  let time = '';
  return function (location) {
    warningCounter++;
    if(warningCounter === 1) {
      time = 'time';
    } else { 
      time = 'times';
    }

    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Flooding Ahead');
const tornadoWarning = hazardWarningCreator('Tornado in Affect');

rocksWarning('Main St and 5th Ave');
rocksWarning('Broadway St and 6th Ave');
rocksWarning('Sesame St and 4th St');
floodWarning('Main St and 5th Ave');
floodWarning('Broadway St and 6th Ave');
floodWarning('Sesame St and 4th St');
tornadoWarning('Main St and 5th Ave');
tornadoWarning('Broadway St and 6th Ave');
tornadoWarning('Sesame St and 4th St');

