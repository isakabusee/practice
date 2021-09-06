let makeArrayCopy = (a) => {
    let c = [];
    let b = Object.assign([], a);
    console.log(b)
    for (let i = 0; i< a.length; i++){
        c.push(a[i]);
    }
    console.log(c);
    let z = [...a]
    console.log(z)

}
makeArrayCopy([4,3,2,6,7])