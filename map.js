// const numbers = [1, 2, 3, 4, 5]

// const number=numbers.map(double)

// function double(value) {
//     return value *value
// }

// console.log(numbers)
// console.log(number);

const Product = [
    {
        name: 'p1',
        price: 2312,
        count: 56
    },
    {
        name: 'p2',
        price: 6541,
        count: 456
    },
    {
        name: 'p3',
        price:1321,
        count: 465
    }
]


const TotalPrice = Product.map(item => ({
    name:item.name,
    TotalPrice: item.price * item.count
}))

console.log(TotalPrice)