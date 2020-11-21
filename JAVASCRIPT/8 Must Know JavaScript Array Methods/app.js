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

const itemPrice = items.map((item) => { 
     return item.price  ///  baalary chykty
 })
 console.log (itemPrice);

// find() misali kitap barby oshonu izdeybiz, we will find single object

 const foundItem = items.find((item) => { 
     return item.name === 'Book'  ///  baalary chykty
 })
 console.log (foundItem);

// forEach very easy to use for every single element

items.forEach((item) => {
    console.log(item.price)
})

// baasy 100 don ashkan barby je jokbu? oshonu teksherebiz
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
console.log(hasInexpensiveItems)

// every checks every single item
const checkseveryitem = items.every((item) => {
    return item.price <= 100 //false
})
console.log(checkseveryitem) // false it checks entire products

//  reduce () method calculates total price of products

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
},0)
console.log(total) // 2822

/////// INCLUDES METHOD

// const items = [1,2,3,4,5]
// const includesTwo= items.includes(2) // true , we have item 2, if we put 7 is false, bcs we dont have

// console.log(includesTwo)
