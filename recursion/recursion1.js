// #1
let countDown = (n) => {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log('Hooray')
}
countDown(8);

// #2
let countDownRecursive= (n) => {
    if(n <= 0) {
        console.log('Hooray')
        return
    }
    console.log(n)
    countDownRecursive(n - 1)
}
countDownRecursive(3)

// #3
 let sumRange=(n) => {
     let total = 0;
     for (let i = n; i > 0; i--) {
         total += i
     }
     console.log(total);
return total;
 }
 sumRange(4);

//  #4

 let sumRangeRecursive = (n, total = 0) => {
    if(n <= 0){
        return total;
    }
    sumRangeRecursive(n - 1, total + n);
 }
 sumRangeRecursive(3)

 