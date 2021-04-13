// let findDoll = (t) => {
//         if(t <= 0){
//             console.log('Hooray')
//             return
//         }
//         console.log(t)
//     findDoll(t-1);
// }
// findDoll(4);

let findElement=(arr)=>{
    const len = arr.length;
    const isForth = arr[4];
    for(let i = 0; i<len; i++){
        console.log(isForth)
    }
}
findElement([3,4,1,5,7,2,7,3]);

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