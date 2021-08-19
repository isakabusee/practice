// let shiftArr=()=>{
//     let count = 0;
//     const arr = [4,6,1,7,4,10];
//     const maxMum = Math.max(arr);
//     arr.sort();
//     console.log(arr)
//     const index = arr.indexOf(10);
//     if(index > -1) { arr.splice(index, 1)}
//     console.log(arr);

// }
// shiftArr();

// let arr = ["a", "a", "b"];
// let uniqueSet = [...new Set(arr)];
// console.log(uniqueSet);

// function nodeCreation() {
//     // const list = new LinkedList();
//     // const n = new Node()
//     // list.Append(n)
//     setTimeout(someFunction, 5000);
//     console.log("I greet")
// }
// nodeCreation()
// function someFunction(){
// console.log("Hey Isaac!")
// } 
// someFunction();

// const greeting = "How are you doing";
// const testing = greeting.split('');
// console.log(testing[0]);

// const str = 12345346;
// const someArr = [];
// const arr = Array.from(String(str), Number);

// console.log(arr);
function anotherFunction(){
    console.log("hello");
    setTimeout(someFunction, 3000)

}
anotherFunction()
function someFunction(n,e){
    let result = 0;
    let newArr = [];
    let maximum = Math.max(newArr);
    for(let i = 0; i<n.length; i++){
    result = n[i] + e;
    newArr.push(result);
     console.log(newArr)
     if(n[i] > maximum){
         newArr.push(true);
     } else newArr.push(false);
     console.log(newArr);
    }
    console.log(newArr);

}
someFunction([4,5,1,8,12], 5)