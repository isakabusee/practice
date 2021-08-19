const items = [
    {name: 'Bike', price: 100 },
    {name: 'TV', price: 200 },
    {name: 'Album', price: 10 },
    {name: 'Book', price: 5 },
    {name: 'Phone', price: 500 },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25 }
]
const filteredItems = items.filter((item)=>{
    return item.price <= 100;
})
console.log(filteredItems);

const foundItems = items.find((item)=> {
    return item.name === 'Album'
})
console.log(foundItems);

items.forEach((item)=> {
    console.log(item.price)
})
const hasInexpensiveItems = items.some((item)=> {
    return item.price <= 100
})
console.log(hasInexpensiveItems);

const hasThisItems = items.every((item)=>{
    return item.price <= 1000
})
console.log(hasThisItems);
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)