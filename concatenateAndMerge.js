const a = [1,2,5,7,9];
const b = [2,5,7,12,100];

const c = a.concat(b).sort((a,b)=> a + b)
console.log(c);

let findSum =(myArr)=>{
    console.log(myArr.reduce((myArr, currentTotal)=>{return myArr + currentTotal},0))
}
findSum([3,4,2,5,7,2,34])