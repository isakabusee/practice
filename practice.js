// class SLL {
//     constructor() {
//         this.head = null;
//     }
//         isEmpty() {
//             if(this.head === null) {
//                 return true;
//             }
//             return false;
//         }
//         message() {
//             console.log(message);
//         }

        
        
//     }


// const beasts = ['dog', 'bison', 'cow', 'duck', 'goat', 'mosquito', 'lion'];
// console.log(beasts.indexOf('mosquito'));

// // const myArr = [];
// // console.log([4,7,1,2,9]);
// let justTesting=() => {
   
// }
// justTesting(console.log("  Something here  "));

// var ages = [4, 10, 18, 23];
// let checkAdult=(age) => {
//     return age >= 18;
// }
// checkAdult(console.log(ages.indexOf(23)));

// var combinationSum3 = function(k,n){
//     var k = 4;
//     var n = 10;
//     for(let i = 0; i<nums.length; i++){
//         if(k+=i && n-k==i){
//             return i;
//         }
//     }
//     // console.log(i);
// }
// combinationSum3()

let combinationSums=(k,n)=>{
    var result = [];
    const goThrough = (idx, arr, sum) => {
        if(sum>n){
            return;
        }
            if(arr.length === k){
                if(sum === n){
                    result.push([...arr])
                }
                return;
            }
            for(let i = idx; i<10; i++){
                // idx is a utility function that traverse thro properties on objects and arrays
                arr.push(i);
                sum +=i;
                goThrough(i+1, sum, arr);
                arr.pop(i);
                sum -=i;
            }
        }
        goThrough(1,0,[]);
        return result;

    }
    combinationSums(4,10);
    // what I have so far.. Needs alittle more work
    // var k = 0;
    // var n = 0;
    // var nums = 1;
    // while(k!=nums, k>0 && n<=9){
    //     if(k + nums == n && (nums + nums == k)+nums ==n ){
    //         nums++
    //     }

    // }
    // console.log(nums);
// }
// combinationSums(4,10);
