/** Write a function called average that takes an array of numbers as its input and returns the average generated from the array of numbers. */

'use strict';

function average(numbers) {
  let sum = 0;
  // use Array.forEach to aggregate a sum
  numbers.forEach(each => {
    sum += each;
  });

  // returning average
  return sum / numbers.length;
}

const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(average(numList1));