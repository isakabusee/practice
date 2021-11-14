const reverseInteger2 = (x) => {
    //123 => 321
    // -123 => -321
    //120 => 12
    // 0 => 0
    //+-2147483648 => 0

    //123 = 1*100 + 2*10 + 3*1
    //321 = 3*100 + 2*10 + 1*1

    //console.log(parseInt(Math.log10(123))+1)
    //console.log(parseInt(123/10**2))
    if(x < -2147483647 || x > 2147483647 || x === 0) {
        return 0;
    }
    const isNegative = x < 0 ? true : false;
    const pInt = Math.abs(x);
    const len = parseInt(Math.log10(123))+1;

    let final = 0;
    let rem = pInt;

    for(let i = len - 1; i>=0; i--){
        let digit = parseInt(rem/10**i);
        let mult = 10 ** (len - 1 - i);
        final = final + digit * mult
        rem = rem%(10**i)
    }
    return isNegative ? -final : final;
}
console.log(reverseInteger2(413))