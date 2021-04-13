// const renderingAlgo=(arr)=>{
//     var result = [];
//     const someFunction=(val,sum)=>{
//         if(val>sum){
//             return;
//         }
//         result.push(sum+val)
//         console.log(result)

//     }
//     someFunction(6,7);
//     result.push(arr);
//     console.log(result);
// }
// renderingAlgo([1,2,4,1,7])

let algoMyOwn=(myArr)=>{
    var temp = 1;
    var result = [];
    myArr.sort((a,b)=>{ return(a-b)})
    for(let i=0; i<myArr.length; i++){
        if(myArr){
            temp++;
        }
        if(myArr[i]== temp){
            result.push(i && temp);
            console.log(result);
        }
            // return (myArr.indexOf(myArr[i]=temp));

        
    }
    console.log(result);
    
}
algoMyOwn([1,3,6,12,5,3,8])

// let letMeSee = ()=>{
//     console.log(" I love my son Junior!!")

// }
// letMeSee();

let someSpread=(myArray,result)=>{
    const newArry = [];
    for(let i=0; i<myArray.length; i++){
        result = Math.max(...myArray)
        newArry.push(result);
        break;
    }
    console.log(newArry);
}
someSpread([2,4,6,21,67,34,7,3,5])