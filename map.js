const numbers = [1, 2, 3, 4, 5]

const number=numbers.map(double)

function double(value) {
    return value *value
}

console.log(numbers)
console.log(number);