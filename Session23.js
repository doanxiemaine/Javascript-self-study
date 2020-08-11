// array.sort
// Syntax:
// array.sort(function(b, c) {}) --> return a sorted array
//              ^ sort function
// if sort function
//      returns a value < 0
//          b will come before c
//      returns a value > 0
//          b will come after c
//      returns 0
//          b and c will stay unchanged

var numbers = [2, 9, 3, 4, 1];
// [1, 2, 3, 4, 9] --> ascending order
var ascendingNumbers = numbers.sort(function(a, b) {
    //assume that a = 1, b = 4
    return a - b; //base on the order we want, 1 comes before 4 in the array, 1 - 4 = -3 < 0
});

console.log(ascendingNumbers);

// [9, 4, 3, 2, 1] --> descending order
var descendingNumbers = numbers.sort(function(a, b) {
    // assume that a = 3, b = 4
    return b - a; //base on the order we want, 3 comes after 4 in the array, 4 - 3 = 1 < 0
});
console.log(descendingNumbers);

var employees = [
    { name: 'Tí', age: 18},
    { name: 'Tèo', age: 20},
    { name: 'Maria', age: 19},
];

console.log(employees);

var sortedEmployeesByAgeAscending = employees.sort(function(a, b) {
    // Assume a = employees[0], b = employees[1]
    // expect: a comes before b
    return a.age - b.age; /// > 0
});

console.log(sortedEmployeesByAgeAscending);

var sortedEmployeesByAgeDescending = employees.sort(function(a, b) {
    // Assume a = employees[1], b = employees[2]
    // expect: a comes before b
    return b.age - a.age; // < 0
});

console.log(sortedEmployeesByAgeDescending);

//exercise:
// 1. Define an array of products (name, price, stock)
// 2. Sort by price from most to least expensive
// 3. Sort by in stock value from most to least expensive

// --> solution
// 1.
let products = [
    { name: 'A', price: 200, stock: 5 },
    { name: 'B', price: 60, stock: 10 },
    { name: 'C', price: 175, stock: 2 },
    { name: 'D', price: 15, stock: 17 },
    { name: 'E', price: 80, stock: 21 },
];

// 2.
let sortedProductsByPriceDescending = products.sort((product1, product2) => {
    return product2.price - product1.price;
});

console.log(sortedProductsByPriceDescending);

// 3. 
let sortedProductsByStockDescending = products.sort((product1, product2) => {
    return product2.stock - product1.stock;
});

console.log(sortedProductsByStockDescending);