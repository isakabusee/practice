
function findSmallestRepeatedSubsequence(primary, secondary) {
    // Write your code here
    for(let i =0; i<primary.length; i++){
        for(let j=0; j<secondary.length; j++){
            if(secondary[j].includes(primary)){
                return True;
            } 
            if(secondary[j] == (primary[i])){
                return secondary[j] && primary[i]
            }
        }
    }
    return secondary.length;
    
}

const fruits = ["banana", "apple", "jackfruit", "avocado"]
console.log(fruits.indexOf("jackfruit"));

function findingString(myArr){
//   const anotherString = [...new Set(myArr)];
//   console.log(anotherString);
const elementToRemove = 2;
const index = myArr.findIndex(el => el === elementToRemove);
console.log(index)
const outcome = [...myArr.slice(0,0,44), ...myArr.slice(index)];
console.log(outcome);
}
findingString([5,3,5,2,5,6,7,8,3])

someFunction =(theArr)=>{
    const pickNum = 7;
    const index = theArr.findIndex( el => el === pickNum);
    console.log(index)
    const addedSum = theArr.reduce((theArr, total) => {return theArr + total}, 0);
    console.log(addedSum)

}
someFunction([4,5,2,7])