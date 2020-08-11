// Array a methods
var a = [1, 3, 2];
var b = [10, 20];
var c = 5;

// a.concat(b), after concatenate, array of a and b do not change
a.concat(b); // returns [1, 3, 2, 10, 20]
b.concat(a); // returns [10, 20, 1, 3, 2]

// a.push(b)
a.push(c); // returns 4, which is the length of new array of a = [1, 3, 2, 5]

// a.pop()
a.pop(); // returns the last elememt of the popped array

// a.shift()
a.shift(); // acts like dequeue in Queue data structure, remove the first element in the queue, then return the new queue

// a.unshift(b)
a.unshift(c); // Add the input to the top of the queue, then return the length of new queue

// a.slice(b)
var d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(d.slice(6)); //returns array [7, 8, 9]
console.log(d.slice(-6)); //returns array [4, 5, 6, 7, 8, 9]
console.log(d.slice(10)); //returns empty array []
console.log(d.slice(-10)); //returns the initial array [1, 2, 3, 4, 5, 6, 7, 8, 9]
// if b > 0 --> return a new array of elements remains after skipping the first b elements
// if b < 0 --> return a new array of the last b elements

// a.slice(c, d)
console.log(d.slice(2, 5)); //returns array [3, 4, 5]
console.log(d.slice(2, -3)); //returns array [3, 4, 5, 6]
console.log(d.slice(3, -2)); //returns array [4, 5, 6, 7]
console.log(d.slice(-5, -2)); //returns array [5, 6, 7]
console.log(d.slice(-5, 1)); //returns empty array []
console.log(d.slice(-5, 8)); //returns array [5, 6, 7, 8]
console.log(d); //sliced array does not changed throughout the process

//a.splice(b, 0, c) --> inserts c at index b of array a
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); //inserts 'Feb' at index 1 of array months
console.log(months); //returns the array months = ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May'); //inserts 1 element, which is 'May', into the 4th index
console.log(months); //returns the array months = ['Jan', 'Feb', 'March', 'April', 'May']

months.splice(6, 2, 'May', 'June'); //inserts 2 elements, which are 'May' and 'June', into the 6th index. Since there are only 5 index-s in the array, it will automatically input into 5th index
console.log(months); //returns the array months = ['Jan', 'Feb', 'March', 'April', 'May', 'May', 'June']

months.splice(6, 3, 'June', 'July'); //inserts 2 instead of 3 elements, since there are only 2 input parameters, which are 'May' and 'June', into the 6th index
console.log(months); //returns the array months = ['Jan', 'Feb', 'March', 'April', 'May', 'May', 'June', 'July']