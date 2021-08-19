// let fruits = ["apple", "orange", "cherry"];
// fruits.forEach(someFunction);

// function someFunction(item, index) {
//     // document.getElementById("demo").innerHTML + index + ":" + item + "<br>";
//     console.log(fruits)
// }
let testFunction=(arr)=>{
    arr.sort((a,b) =>{return b-a});
    let result = [...new Set(arr)]
    result.splice(1,0, 100);

console.log(result);
console.log("array has " + result.length + " digits");

}
testFunction([4,6,1,9,6,2,4,8,10,3,33]);

const names = [
    {actual: 'Isaac', wealth: 2000 },
    {actual: 'Derrick', wealth: 1000 },
    {actual: 'Jessy', wealth: 700 },
    {actual: 'Tommy', wealth: 1500}
]

const filteredNames = names.filter((name) => {
    return name.wealth <= 1000
})
console.log(filteredNames)