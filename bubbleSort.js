// let bubbleSort = (numbers) => {

//     for(let i = 0; i<numbers.length; i++) {
//         for(let j = 1; j<numbers.length; j++) {
//             if (numbers[j]< numbers[j-1]) {
//                 let temp = numbers[j];
//                 numbers[j] = numbers[j-1]
//                 numbers[j-1]= temp;
//                 console.log(numbers);
//             }
            
//         }
//     }
    
// }
// bubbleSort([4,1,6,7,3,2])

// let anotherFunction = (myArr) => {
//     for(let i = 0; i<myArr.length; i++) {
//         for(let j = 1; j<myArr.length; j++) {
//             if(myArr[j]< myArr[j-1]) {
//                 let temp = myArr[j];
//                 myArr[j] = myArr[j-1];
//                 myArr[j-1] = temp;
//                 console.log(myArr)
//             }
//         }
//     }

// }
// anotherFunction([5,3,9,1,2,8,4,6])

// let someOther=(myArray)=> {
//     let newArr = myArray.sort((a,b)=>{return b-a})
//     console.log(newArr);
//     const secondBiggest = newArr[1];
//     console.log(secondBiggest);
//     const theSet = [...new Set(newArr)];
//     console.log(theSet);
// }
// someOther([5,3,2,7,9,4,2,1,7])

let stillPracticing = (items, val) => {
    items.splice(1,0, val)
    console.log(items);
}
stillPracticing([5,6,1,4,8,2], 42)