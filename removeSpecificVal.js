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

const myArr = [12,3,4,5,6,2,6];
const theNumberToReplace = 12;
const index =myArr.findIndex(el => el === theNumberToReplace);
console.log(myArr)
const result = [...myArr.slice(0, 0, 12), ...myArr.slice(index + 1)]
console.log(result)


const searchArray = (Ar) => {
    for(let i = 0; i<Ar.length-1; i++){
        for(let j=0; j<Ar.length-1; j++){
            if(Ar[j]%3 == 0){
                console.log("FizzBuzz")
            } else {
                console.log("Fuzzy")
            }
        }
    }
}
searchArray([12,3,4,5,6,2,6])

