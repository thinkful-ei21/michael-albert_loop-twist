/**
 * Two functions take a single argument: an array of numbers called numbers. 
 * max(numbers) should return the largest number in the array, 
 * while min(numbers) should return the smallest
 */

 function max(numbers) {
    let currentNum = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > currentNum) {
            currentNum = numbers[i];
         }
         i++;
    }
    return currentNum;
 }

 function min(numbers) {
    let currentNum = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] < currentNum) {
            currentNum = numbers[i];
         }
          i++;
    }
    return currentNum;
 }

console.log(`Max: ${max([1,5,3,4022,1,19,44,222])}`);
console.log(`Min: ${min([5,3,4022,1,19,44,222])}`);

