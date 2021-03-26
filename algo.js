//#1
// let myArr: number[5,1,7,2]; 
// this is in typescript only;
// let myArr = [5,1,7,2];
// const bringNumbers = () => {
//     for (let j = 0; j < myArr.length-1; j++) {
//         // result = myArr[j] + myArr[j+1];
//         return myArr[j] *= myArr[j+1];
//     }
//     console.log('Isaac');
//     console.log(myArr[j]);
// }
// bringNumbers();
//#2
// let someFunction = () => {
//     some_dictionary={
//         "CT":["alen","harry"],
//         "AK":["Liza","john"],
//         "TX":["fred","goerge"]
//     };
//needs some work done on it
//     console.log(some_dictionary.CT[1]);
// }
// //#3
// some_dictionary={
//     "CT":["alen","harry"],
//     "AK":["Liza", 4, "john"],
//     "TX":["fred","goerge"]
// };
// //it works
// console.log(some_dictionary.TX[0]);
// // Yes!! creating dictionaries and accessing values
// let inputArr = 'aaa,bbbbb,cc,dddddddd,fffffffff';
// let shortenArr = () => {

//     for (let i = 0; i<inputString.length; i++){
//         let data = inputString[i];
//         if (!d[data.key]) {
//             d[datum.key] = [];
//         }
//         d[data.key].push(datum.val);
//     }

// }
// shortenArr();
//4
var keys = ['foo', 'bar', 'baz'];
var values = [11, 22, 33]

var result = {};
keys.forEach((key, i) => result[key] = values[i]);
console.log(result);



// Given two allLongestStrings, find the number of common characters between them.
// Example 
// For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
// strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    let count = 0;
    var s1 = "";
    for (let i = 0; i < s1.length; i++) {
        for (let j = 1; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                count+=1;
            }
            // not sure about this line
            if (s1[i] == s2[i+1] && s2[j] == s2[j+1]) {
                count++;
            }
        }
    }
    return count;
}
commonCharacterCount()

// How to concat strings

var str1 = "Hello  ";
var str2 = "world!";
var res = str1.concat(str2);
console.log(res);

var emmitCommand = function (arr){
    // var arr = [];
    let maximum = 0;
    for(let i = 0; i<arr.length;i++){
        maximum = Math.min(...arr)
        console.log(arr)
    }
    
console.log(maximum);
    
}
emmitCommand([8,9,10,14,2]);

let findString = () => {
    
}