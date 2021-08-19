// let findDoll = (t) => {
//         if(t <= 0){
//             console.log('Hooray')
//             return
//         }
//         console.log(t)
//     findDoll(t-1);
// }
// findDoll(4);

// let findElement=(arr)=>{
//     const len = arr.length;
//     const isForth = arr[4];
//     for(let i = 0; i<len; i++){
//         console.log(isForth)
//     }
// }
// findElement([3,4,1,5,7,2,7,3]);

// let combinationSums=(k,n)=>{
//     var result = [];
//     const goThrough = (idx, arr, sum) => {
//         if(sum>n){
//             return;
//         }
//             if(arr.length === k){
//                 if(sum === n){
//                     result.push([...arr])
//                 }
//                 return;
//             }
//             for(let i = idx; i<10; i++){
//                 // idx is a utility function that traverse thro properties on objects and arrays
//                 arr.push(i);
//                 sum +=i;
//                 goThrough(i+1, sum, arr);
//                 arr.pop(i);
//                 sum -=i;
//             }
//         }
//         goThrough(1,0,[]);
//         return result;

//     }
//     combinationSums(4,10);

    someFunction=(n)=>{
        // n = n.toString();
    //     const y = n.toString().split('');
    //    for(let i = 0; i < y.length; i++) {
    //        y[i] = +y[i] | 0;
    //        console.log(y[i]);
    //    }
    //    console.log(y);

    const z = Array.from(String(n), Number);
    console.log(Math.max(...z));
    const y = [];
    const toRemove = y.indexOf(11);
    for(let i = 0; i<z.length; i++){
        if(z[i]%2== 0){
            y.push(z[i]);
            y.splice(2, 0, 11);
            console.log(y);
            if( toRemove > -1){
                y.splice(toRemove, 1);
                console.log(y);
            }

        }
        // if( toRemove > -1){
        //     y.splice(toRemove, 1);
        //     console.log(y);
        // }
        
    }
     

    console.log(z);

    }
    someFunction(528491)

    let tryingToDelete = (m, val)=> {

        const myArr = Array.from(String(m), Number);
        console.log(myArr);
        newArr = myArr.filter(function(item) {
            // this is a function to delete a value
            return item !== val
        });
        console.log(newArr)
        const uniqueValues = [...new Set(newArr)];
        console.log(uniqueValues);

    }
    tryingToDelete(3417183, 7)

    let letsRecurs = (arr, candies)=>{
        const len = arr.length;
        for(let i = 0; i< len; i++){
            if(candies<=0){
                return;
            }
            arr[i]+ 1;
            
        }
        console.log(arr);
        letsRecurs(arr, candies-1);
        
    }
    letsRecurs([1,4,2], 5)

    let timerFunction = ()=> {
        
    }
    timerFunction()