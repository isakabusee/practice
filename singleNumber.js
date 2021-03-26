
// let singleNumberIII=(arr)=>{
//     result = [];
//     //one way
//     arr.sort();
//     console.log(arr);
//     //another 
//     //arr.sort((a, b) => a - b);


// }
// singleNumberIII([1,2,1,3,2,5]);

// let singleNumberIII =(arr)=>{
//     var result = [];
//     var temp = 1;
//     arr.sort();
//     console.log(arr);
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]== temp){
//             temp++
//             return arr[i];
//         }
//     }
//     result.push(arr[i]);
//     console.log(result);
// }

// singleNumberIII([1,2,1,3,2,5])

let singleNumberIII=(arr)=>{
    var result = [];
    arr.sort();
    console.log(arr);
    //[1,1,2,2,3,5]
    compare(arr);
    function compare(arr){
        if(arr[0] ===arr[1]){            
            arr.splice(0,2);
            // we're deleting two elements starting at 0 index 

        }
        // else{
        //     result.push(arr[i]);
        //     arr.shift();
        //     return result;
        //     // we are deleting the first element at index 0
        // }
        result.push(arr[0]);
        arr.shift();
        // console.log(result);
    } 
    
    console.log(result);   
}
// console.log(result);
singleNumberIII([1,2,1,3,2,5]);

