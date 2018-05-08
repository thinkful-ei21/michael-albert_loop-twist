'use strict';

/**
 A turtle's movements can be represented by an array which looks like this: [3, 4]. The first item in the array
 represents the number of steps the turtle takes forwards. The second number in the array is the number of steps
 the turtle takes to the left.
*/

// Here is an array of different movements made by a turtle:

const steps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// Use the filter method to remove any items where the turtle moves backwards or to the right
// (i.e. where either the first of second number is an item is negative).

const backOrRight = steps.filter((each) => {
  if(each[0] < 0 || each[1] < 0) return each;
});

console.log(backOrRight);

// Use the map method to create a new array containing how many steps the turtle makes in total with each movement
// (i.e. the first and second number added together).

const totalSteps = steps.map((each) => {
  let step0 = each[0];
  let step1 = each[1];
  if(step0 < 0) {
    step0 = step0 * -1;
  }
  if(step1 < 0) {
    step1 = step1 * -1;
  }
  return step0 + step1;
});

console.log(totalSteps);

// Use the forEach method to log out how many steps the turtle took in each case.

const eachStep = steps.forEach((each) => {
  let step0 = each[0];
  let step1 = each[1];
  if(step0 < 0) {
    step0 = step0 * -1;
  }
  if(step1 < 0) {
    step1 = step1 * -1;
  }
  console.log(step0 + step1);
});

eachStep;