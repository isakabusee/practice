let reduceSize=(arr)=>{
    var result = [];
    const iterateThro=(idx,arr,sum)=>{
        // arr.sort((a,b)=>{
        //     return a-b;
        // });
        arr.splice(arr.length/2);
        console.log(arr);
        result.push(arr);
        sum += idx;
        console.log(result);
        console.log(sum);
    }
    iterateThro([],0,0);
}
reduceSize([2,2,2,5,5,3,3,7,9,9,1])

let someStrin=()=>{
    var str1 = ["Sasa","hizi","something","are funny"];
    var str2 = ["This", "is", "some", "cool", "stuff", "Sasa"];
    var outcome = [];
    for(let i = 0; i<str1.length; i++){
        for(let j = 0; j<str2.length; j++){
            if(str1[i]== str2[j]){
                outcome.push(str1[i] && str2[j]);
            }
        }
    }
    console.log(outcome);
}
someStrin();

// let someKidsCandies=(array, sum)=>{

// }
// someKidsCandies(array)