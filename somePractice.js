// let someFunction = ()=>{
//    const specialItems = items.map((item) => {
//        return item <= 4
//    })
//    console.log(specialItems)
// }
// const items = [2,4,1,7,3,8]
// someFunction()

// let anotherFunction = (numbers) => {
//     const extraStuff = numbers.reduce((currentTotal, number) => {
//         return number + currentTotal
//     }, 0)
//     console.log(extraStuff);

// }
// // const numbers = [3,5,2,8,9,1]
// anotherFunction([3,5,2,8,9,1])

let addSum = (arr) => {
    const summingUp = arr.reduce((total, arr) => {
        return arr + total;
    }, 0)
    console.log(summingUp);
}
addSum([3,5,1,7,2,6,9])

let someFunction = (myArr) => {
    const result = [];
    // for(let i=0; i<myArr.length; i++){

    // }
    const position = myArr.indexOf(8);
    console.log(position)
}
someFunction([4,3,6,6,2,6,7,8])

let uniqueNums = (nums) => {
    const uniqueSet =[...new Set(nums)];
    console.log(uniqueSet);
}
uniqueNums([3,4,2,5,7,8,9,4,2,5,3,2])
