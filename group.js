// function makeArrayConsecutive2(statues) {
//     return Math.max.apply(null, statues) - Math.min.apply(null, statues) - statues.length + 1;
// }

// Hana's code

// let myArray = [6, 2, 3, 8];

// let max = myArray[0];
// let min = myArray[0];
// let result = 0;
// function makeNumbersConsecutive(){
//     for(let i = 0; i<myArray.length -1; i++){
//         if ( max < myArray[i]) {
//             max = myArray[i];
//         }
//         if ( min > myArray[i]) {
//             min = myArray[i];
//         }
//         result = max - min + 1 - myArray.length;
//     }
//     return [result, max];
// }
// console.log(min, min);
// console.log('hello');
// makeNumbersConsecutive([6, 2, 3, 8]);
// let myArr = [ 4, 6, 9, 14];
// let doSomething = () => {
//     for(var i = 0; i<myArr.length; i++){
//         console.log('Hey');
//         console.log(myArr[i]);
//     }
// }
// doSomething();
// isPalindrome problem
// let str = '';
// let isPalondrome = () => {
//     for(let i = 0; i<str.length/2; i++){
//         if(str[i] != str[str.length-i-1]){
//             return true;
//         }
//     }
//     return false;
// }
// isPalondrome();
// console.log(isPalondrome('ana'));

//
let adjacentElementProduct = () => {
    let arr = inputArray;
    let product = arr[0] * arr[1];
    for (let i = 0; i < arr.length - 1; i++) {
        product = Math.max(product, arr[i] * arr[i+1]);
        if (arr[i] * arr[1] == product) {
            index = arr[i] && arr[1];
            console.log(index);
        }
    }
    return product;
}
inputArray = [5,1,8,5,6,2];
console.log(adjacentElementProduct(inputArray));

// let insertNumber = () => {
//     arr.push
// }
