// array.find
var numbers = [1, 2, 3, 4];

var found = numbers.find(function(number) {
    console.log(number);
    return number % 2 ===0;
}); // stop at number = 2

console.log(found); // return found = 2 in console
// Both find() and filter() method goes through each element of the array and see if that element fits our condition.
// However, filter() only stops when it reaches end of array. While find() stops as soon as the required element is found.
