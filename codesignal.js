// function isLucky(n) {
//     const myArray = Array.from(n);
//     console.log(myArray)
//     const sum = 0;
//     const len = n.length;
//     const half = len/2;
//     const firstHalf = 0;
//     const secondHalf = 0;
//     for(let i = 0; i<half; i++){
//         half += n[i];
//     }
//     for(let j = half + 1; j<secondHalf; j++){
//         sum += n[j]
//     }
//     if(sum[i] != sum[j]){
//         return 'is not lucky'
//     }
// return 'is lucky'
// }
// isLucky(1,4,2,7,8);

// let divideByHalf=(n)=>{
//     // const final = [];
//     n.sort((a,b)=>{return a-b});
//     for( let i in n){
//         // final.push([...new Set(n)]);
//         console.log([...new Set(n)]);
//         return;
//     }
// // console.log(n);
// }
// divideByHalf([3,5,6,1,6,7,2,5,9])

// let isLucky=(n)=>{
//     const len = n.length;
//     const newArr = [];
//     const myArr = 0;
//     for(let i = 0; i<len; i++){
//         newArr.push(Array.from(n));
//         // or I could also do this
//         // newArr = [...n]
//         console.log(newArr);

//     }
//     // console.log(myArr);
// }
// isLucky([3,5,6,1,6,7,2,5])

let someRecursion =(nums) => {
        if(nums <= 0) {
            console.log("All done!");
            return;
        }
        console.log(nums)
        nums--;
        someRecursion(nums);
}
someRecursion(10);

let printArray=(arr)=>{
    arr.sort((a,b)=>{return a-b});
    // const newArray = new Set([arr]);
    console.log([...new Set(arr)]);
    
}
printArray([4,5,1,8,3,1,10,2])