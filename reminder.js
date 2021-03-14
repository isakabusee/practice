let findOdd = (l,r)=> {
    let theArray = [];
    for(let i = l; i <= r; i++) {
        if(i % 2 !== 0) {
            theArray.push(i)
        }
    } 
    console.log(theArray);
}
findOdd(2,8);

// let bringOdd =(l,r)=> {
//     let thArray = [];
//     for(let i = l; i<= r; i++){
//         if(i%2 !== 0){
//             thArray.push(i);
//         }
        
//     }
//     console.log(thArray); 
// }
// bringOdd(1,100);

let justString=(str)=> {
    var str = [" hello ", "sijui", "I am testing this"];
    let maxstring = 0;
    let temp = str[i];
    for(let i = 0; i<str.length; i++) {
        for(let j = str[i]; j<str[i].length; j++){
            if(str[i][j]> str[i+1][j]){
                maxstring=str[i+1][j];
                temp++;
                // still under construction
            }
        }
       return maxstring;
    }
    console.log(maxstring);
}
justString();


iMakeFunction=()=> {
    let str1 = ["something here", "another", "simu"];
    for (let j = 0; j<str1.length; j++) {
        str1.concat(str1[j]);
    }
    console.log(str1);

}
iMakeFunction();

let sumAllArray= (ar) => {
    let sum = 0;
    for(let i=0; i<ar.length;i++){
        sum+=ar[i];
    }
    console.log(sum);
}
sumAllArray([1,2,3,4,10,11])