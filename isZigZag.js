let zigZag=(numbers)=>{
let a = [];
let max = 0;
let set = new Set();
for(let i=0; i<numbers.length; i++){
   for(let j=1; j<numbers.length; j++){
       if(numbers[i]< numbers[j] || numbers[i] == numbers[j+1]){
        //    a.push(numbers[i])
        //    console.log(a)
        set.add(numbers[i])
        console.log(set)
         }
    }
}

}
zigZag([1, 2, 1, 3, 4])