let findMinimumVal = () => {
    const smallestVal = (arr) =>{
        return Math.min(...arr);
    }
    console.log(smallestVal([8,9,10,14,2]));
}
findMinimumVal();

const anArray = [8,4,2,5,7,6,19];
const numToRemove = 7;
const index = anArray.findIndex(el => el=== numToRemove);
const result = [...anArray.splice(0,0,7)];
console.log(index);
console.log(result);