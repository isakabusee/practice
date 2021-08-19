let findOdd = (l,r)=> {
    let theArray = [];
    for(let i = l; i <= r; i++) {
        if(i % 2 !== 0) {
            theArray.push(i)
        }
    } 
    console.log(theArray);
}
findOdd(2,8);

// let bringOdd =(l,r)=> {
//     let thArray = [];
//     for(let i = l; i<= r; i++){
//         if(i%2 !== 0){
//             thArray.push(i);
//         }
        
//     }
//     console.log(thArray); 
// }
// bringOdd(1,100);

// let justString=(str)=> {
//     var str = [" hello ", "sijui", "I am testing this"];
//     let maxstring = 0;
//     let temp = str[i];
//     for(let i = 0; i<str.length; i++) {
//         for(let j = str[i]; j<str[i].length; j++){
//             if(str[i][j]> str[i+1][j]){
//                 maxstring=str[i+1][j];
//                 temp++;
//                 // still under construction
//             }
//         }
//        return maxstring;
//     }
//     console.log(maxstring);
// }
// justString();


iMakeFunction=()=> {
    let str1 = ["something here", "another", "simu"];
    for (let j = 0; j<str1.length; j++) {
        str1.concat(str1[j]);
    }
    console.log(str1);

}
iMakeFunction();

let sumAllArray= (ar) => {
    let sum = 0;
    for(let i=0; i<ar.length;i++){
        sum+=ar[i];
    }
    console.log(sum);
}
sumAllArray([1,2,3,4,10,11])

let sumOfArray=(myArr)=>{
    let sum = 0;
for(let i=0; i<myArr.length; i++){
    sum+=myArr[i];
}
console.log(sum);
}
sumOfArray([4,2,1,6,20])

let anotherSum=(someNums)=>{
    let addedSum = someNums.reduce((currentTotal, someNums)=>{
        return someNums + currentTotal;
    },0)
    console.log(addedSum)
}
anotherSum([7,4,2,9]);

let countingAlgo= (seriesNums)=>{
    const occuranceOfNums = seriesNums.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
    console.log(occuranceOfNums);
}
countingAlgo([6,8,3,2,8,1,8,9,5])

// returns true or false
const a = [2,1,5,2,6,8,9,6,7,5];
a.filter((value)=> {
    console.log(value === 2);
}).length;

let stillCounting= (arr) => {
    let temp = 0;
   for(let i=0; i<arr.length; i++){
       if(arr[i] === 7){
           temp++;
       }
   }
   console.log(temp);
   console.log(arr.length);
}
stillCounting([3,2,4,5,7,3,2,7,9,2])