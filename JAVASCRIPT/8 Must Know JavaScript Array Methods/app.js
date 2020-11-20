const items = [
    {name: 'Bike', price: 500},
    {name: 'TV', price: 147},
    {name: 'Album', price: 5},
    {name: 'Book', price: 25},
    {name: 'Phone', price: 100},
    {name: 'Computer', price: 2000},
    {name: 'Keyboard', price: 45}
]
// filter () ---juzdon kichine baalar chygat
const filteredItems = items.filter((item) => { 
    return item.price <= 100
})
console.log(items)
console.log (filteredItems);

// map () --- tovardartin attary chygat
const itemNames = items.map((item) => { 
    return item.name
})
console.log (itemNames);

// egerde oshonu ele price ka almashtyrsak baasy chygat

const itemNames = items.map((item) => { 
    return item.price  ///  baalary chykty
})
console.log (itemNames);

// find() misali kitap barby oshonu izdeybiz

const itemNames = items.map((item) => { 
    return item.price  ///  baalary chykty
})
console.log (itemNames);