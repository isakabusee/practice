//1
let f = () => {
    let i = 1;
    return () => {
        console.log(i)
    }
}
console.log(f());

//2
for(let i=0; i<3; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
    f();
}
console.log('after this loop')