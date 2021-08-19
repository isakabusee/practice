// a prime number is a number that has two factors 1 and itself
// 0,1 not prime
// 2 is prime all other even numbers are not prime

let isPrime = (n)=>{
    if(n===2){
        return true;
    }
    if(!Number.isInteger(n) || n<2 || ! (n%2)){
        return false;
    }
    let ctr = 0;
    for (let i = 3; i<= Math.sqrt(n); i++, i++){
        ctr++;
        if(n%i === 0){
            console.log('ctr:', ctr);
            return false;
        }
    }
    console.log('ctr:', ctr);
    return true;
}
console.log(isPrime(101));
// for(let i = 0; i<30; i++){
//     if(isPrime(i)){
//         console.log(i);
//     }
// }