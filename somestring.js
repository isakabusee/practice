let someString=(str)=>{
    if(str.includes("chicken")){
        console.log("true");
    }else{
        console.log("false");
    }
}
someString(["goat","chicken","farasi","goose","cow","lion"]);

// Testing

// let tryingToPush=()=>{
//     var arr = [5,4,1,2,9,8,2,5,1,10,4,1,6]
//     const setOfEight=()=>{
//         return 
//     }
//     for(let i=0; i<arr.length; i++){
        
//     }
    

// }
// tryingToPush(3,7);
// method 1
let removeDuplicateValues=()=>{
    let a = [1,2,5,1,8];
    let b = [];
    let len = a.length
    for(let i=0; i<len; i++){
        if(b.indexOf(a[i]) === -1){
            b.push(a[i]);
        }
    }
console.log(b);
}
removeDuplicateValues()

// metod 2
let sameDuplicate=(z)=>{
    let y = [];
    // let z = []
    let temp;
    let len = z.length;
    for(let i=0; i < len; i++){
        if(z[i] !== temp){
            y.push(z[i]);
            temp = z[i];
        }
    }
    console.log(y);
}
sameDuplicate([7,7,7,3,9,3,3,0,1,4,2,4]);

//method 3
// solving it using javascript object creation

let ridOfDuplicate=()=>{
    let n = [3,6,3,8,1,1,9,9,10];
    // let t = [];
    // so t does not have to be defined or be made into an empty array so we can push stuff into it. Interesting!! ;)
    obj = {};
    // let len = n.length;
    // then use a for of loop
    // for(let i=0; i<len; i++){
    //    //no foreloop for this one instead we are going to use a for of loop. But you can use either I guess. So I'm gonna mute this one.
    // }
    for(let i of n){
        // i would be the value and not the index in this loop
        obj[i] = true;

    }
    // console.log(obj)
    let t = Object.keys(obj);
    console.log(t);
}
// this is actually a faster method
ridOfDuplicate();

// method 4

let g = [6,3,3,4,7,7,1,9,9];
// let hSet = new Set(g)
// Set is a constructor and it only stores unique values by default
// console.log(hSet);
// console.log(h);
// we are going to come up with a one line solution
console.log([... new Set(g)]);