//1
// const insertingNums = (z) => {
//     const insterted = z.splice(0,4,2);
//     console.log(insterted);
// }
// insertingNums([8,4,3,6,7]);
// let z = [6,7,3,7,2]
//  z.splice(2,0,6);

//2
// let someFunction = (z) => {
//     const m = z.map(Math.sqrt)
//     console.log(m)

// }
// someFunction([144,9,16])

// const anotherFunction = (nums) => {
//     const r = nums.map((nums) => nums * 2)
//     console.log(r)
//     const t = r.filter((x) => x > 70);
//     console.log(t);

// }
// anotherFunction([65,73,58])

// const someNums = [5,7,3,2,47];
// console.log(Math.min(...someNums));

// const myStr = ["I am testing this"];
// const newStr = Object.assign(...myStr);
// console.log(newStr)

let testingS =(numbers)=> {
    // for(let i=0; i<numbers.length; i++){
    //     if(numbers[i] < 0 || numbers[i] == null) {
    //         return;
    //     }
    //     console.log(numbers[i])
    // }
    // console.log(numbers[0]);
    for(let i=0; i<numbers.length; i++){
        let evenNums = 0;
        if(i % 2 == 0) {
            evenNums = numbers[i];
        }

    }
    
}
testingS([1,2,3,4,5])

