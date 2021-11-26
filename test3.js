countingThings = (m) => {
    let sum = 0;
    for(let i = 0; i< m.length; i++) {
        sum += m[i];
    }
    console.log(sum)
}
countingThings([6,3,7,3,3]);

multiplyNums = (z) => {
    const mult = z.reduce((prevVal, currntVal) => {
        return prevVal * currntVal
    }, 1);
    console.log(mult)
}
multiplyNums([4,2,5,6])