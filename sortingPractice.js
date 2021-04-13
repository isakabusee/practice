let arr = [3,4,6,1,7,2,9,1,8];
// console.log([...arr]);
console.log([...new Set(arr)]);



// practicing what I have learned
const array = [5,5,5,6,2,2,7,8,75,9];
let temp;
const y = [];
for(let i in array){
    if(array[i] !==temp){
        y.push(i); 
        console.log(y);
    }
}

let correntPractice=()=>{
    const array = [5,5,5,6,2,2,7,8,75,9];
    let temp = 0;
    let outcome = [];
    let len = array.length;
    for(let i=0; i<len; i++){
        if(array[i] !== temp){
            outcome.push(array[i]);
            temp = outcome[i];
            temp++;
        }
    }
    console.log(outcome)
}
// correntPractice()

let someArr =()=>{
    const array = [5,5,5,6,2,2,7,8,75,9];
    console.log([...new Set(array)])

}
someArr();

// let duplicateArray=()=>{
//     const someAr = [5,5,5,6,2,2,7,8,75,9];
//     console.log([...someAr])
// }
// duplicateArray()