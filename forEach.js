const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


sum = 0

numbers.forEach((item, index, arr) => {
    sum = sum + item
    
});


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'a', 'b', 'c', 'd']

let count = {}

letters.forEach((item, index, arr) => {
    if (count[item]) {
        count[item]++
    }
    else {
        count[item]=1
    }
})
console.log(count)
// function consoleItem(item, index, arr) {
//   console.log(arr);

// }
