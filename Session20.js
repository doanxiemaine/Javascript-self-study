// array.reduce method
var numbers = [2, 4, 5, 7, 9, 1];

var reduced = numbers.reduce(function(a, b) {
    console.log(a, b); // First iteration: a = 2, b = 4
    return a + b; // current a + b result will be next iteration's value of a
});

console.log(reduced); // returns reduced = 2 + 4 + 5 + 7 + 9 + 1 = 28

//exercise
var orders = [
    { name: 'A', quantity: 2, unitPrice: 100 },
    { name: 'B', quantity: 1, unitPrice: 400 },
    { name: 'C', quantity: 5, unitPrice: 15 },
    { name: 'D', quantity: 7, unitPrice: 30 },
    { name: 'E', quantity: 4, unitPrice: 500 }
];

//use reduce() method to calculate total price of orders
let initialValue = 0;
var ordersTotalPrice = orders.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.quantity * currentValue.unitPrice;
}, initialValue); //if we want to calculate object's value in array of objects, we must give reduce() method an initialValue

console.log(ordersTotalPrice); // returns ordersTotalPrice = 2*100 + 1*400 + 5*15 + 7*30 + 4*500 = 2885