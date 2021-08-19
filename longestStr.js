let longestString=(s)=>{
    // const separatedStr = s.split(" ");
    // console.log(separatedStr);
}
longestString(["nndNfdfdf"]);

const m = "hsytehektjhnbetlh is this someithing I can work with?";
const toTest = m.split(" ");
console.log(toTest);

const myArr = [6,3,6,5];
const half = Math.ceil(myArr.length/2);
const firstHalf = myArr.slice(0,half);
const secondHalf = myArr.slice(-half)

// console.log(firstHalf);
// console.log(secondHalf);

let letsAddSomething=(h)=>{
    let sum = 0;
    const half = Math.ceil(h.length/2);
    const firstHalf = h.slice(0,half);
    const secondHalf = h.slice(-half);
    console.log(secondHalf);
    console.log(firstHalf);
    const sum1 = firstHalf.reduce((firstHalf,total)=>{return firstHalf+total},0);
    console.log(sum1);
    const sum2 = secondHalf.reduce((secondHalf,total)=>{return secondHalf+total},0);
    console.log(sum2);
    if(sum1 == sum2){
        console.log("This is a Lucky Number");
    } else {
        console.log("Number is not Lucky")
    }
}
letsAddSomething([14,6,3,17])
