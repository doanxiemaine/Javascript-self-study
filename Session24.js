// Math object in Javascript

// Math.PI;
function discArea(r) {
    return r * r * Math.PI;
}
var s = discArea(5);
console.log(s); // Calculate the area of a circular disc with radius = 5

// Math.ceil(number) --> round up
console.log(Math.ceil(9.25)); // 10

// Math.floor(number) --> round down
console.log(Math.floor(9.7)); // 9

// Math.max(x1, x2, x3, ...) --> Find the max among parameters
console.log(Math.max(10, 20, -1)); // 20

// Math.min(x1, x2, x3, ...) --> Find the min among parameters
console.log(Math.min(10, 20, -1)); // -1

// Math.random() --> only returns floating-point, pseudo-random number in range of [0, 1)
function tossACoin() {
    var random = Math.random();
    console.log(random);
    return random > 0.5;
}
console.log('Mặt sấp:', tossACoin());

// exercise
// build a function represents rolling a die
function rollADie() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log('Rolling.... We got a', rollADie());