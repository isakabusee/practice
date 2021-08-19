let fizzBuzz =(n)=>{
    for(let i=0;i<n.length;i++){
        if(n[i]% 5==0 && n[i]% 3==0){
            console.log("FizzBuzz")
        }
        if(n[i] % 3==0 && n[i]%5!==0){
            console.log("Fizz");
        }
        if(n[i] % 5==0 && n[i]%3!==0){
            console.log("Buzz");
        }
        if(n[i] % 5!==0 && n[i]%3!==0){
            console.log(n[i]);
        }
    }
}
fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])