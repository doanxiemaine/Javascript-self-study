// array.filter method
var numbers = [1, 3, 4, 6, 2, 5, -2, -3, -8, 0, -10];

var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // returns the array evenNumbers = [4, 5, 2, -2, -8, 0, -10]

// exercise
// filter only odd numbers, filter only negative numbers

var oddNumbers = numbers.filter(function(number) {
    return number %2 !==0;
});

console.log(oddNumbers);

var negativeNumbers = numbers.filter(function(number) {
    return number < 0;
});

console.log(negativeNumbers);