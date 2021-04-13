// const inputArray = [1,5,6,2,3,2,3,2,5,1];
// const elementToReplace = 2;
// // Solution 1 - filter method. Removes all occurances of the element without mutating the original array
// const resultingArray = inputArray.filter(el => el !== elementToReplace);
// console.log(resultingArray);
// console.log(inputArray);

// Solution two
// slice and findIndex. Removes only first occurence
const arr = [12,4,14,18,41,10];
const numberToReplace = 18;
const index = arr.findIndex(el => el === numberToReplace);
// el stands for element
// console.log(index);
const outcomeArray = [...arr.slice(0, index), ...arr.slice(index + 1)]
console.log(outcomeArray)


