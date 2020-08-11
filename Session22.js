// arr.reduce part 2

var numbers = [1, 2, 3, 4];

var sum = numbers.reduce(function(a, b) {
    console.log(a, b);
    return a + b;
}, 0);

console.log(sum);

var products = [
    { name: 'A', quantity: 2, unitPrice: 10 },
    { name: 'B', quantity: 3, unitPrice: 20 },
    { name: 'C', quantity: 4, unitPrice: 30 },
];

// total = ?
var total = products.reduce((currentTotal, product) => {
    return currentTotal + product.quantity * product.unitPrice;
}, 0);

console.log(total);

// loop 1: currentTotal = 0, product = products[0]
// 0 + 2 * 10 = 20
// loop 2: currentTotal = 20, product = products[1]
// 20 + 3 * 20 = 20 + 60 = 80
// loop 3: currentTotal = 80, product = products[2]
// 80 + 4 * 30 = 80 + 120 = 200


// exercise:
// Given
var items = ['Tom', 'Bill', 'Kim'];
// 1. use reduce to make this result
// '<Tom><Bill><Kim>'
// 2. use map & join to solve the problem

// --> Solution
// 1. Using reduce()
var sentence1 = items.reduce((currentString, item) => {
    return currentString + '<' + item + '>';
}, '');

// if we dont use an empty String as initial value, there will be an extra '<' and an extra '>' at the beginning and the end of the string.

console.log(sentence1);

// 2. Using map & join:
var sentence2 = items.map(item => {
    return '<' + item + '>';
}).join('');

console.log(sentence2);