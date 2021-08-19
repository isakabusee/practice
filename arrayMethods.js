const items = [
    {name: 'Bike', price: 100 },
    {name: 'TV', price: 200 },
    {name: 'Album', price: 10 },
    {name: 'Book', price: 5 },
    {name: 'Phone', price: 500 },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25 }
]
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
console.log(filteredItems)
// Next we are going to use map
 const itemNames = items.map((item) => {
     return item.name
 })
 console.log(itemNames)
 // Next we are going to use the find method
 const foundItem = items.find((item) => {
     return item.name === 'Keyboard'
 })
 console.log(foundItem)
 // Next we are going to use the ForEach method

 items.forEach((item) => {
    console.log(item.price)
 })
 // Next we are going to use the some method
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
console.log(hasInexpensiveItems)
// Next we are going to use the every method
const hasThisItems = items.every((item) => {
    return item.price <= 1000
})
console.log(hasThisItems)
// Next we are going to use the reduce method
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)
// Next we are going to use the includes method
const myArray = [1,2,5,7,4]
const includesTwo = myArray.includes(2)
console.log(includesTwo)


