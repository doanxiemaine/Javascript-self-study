// scope
// 1. Global Scope
// 2. Local Scope
//
// When a function is executed -> Create a new scope
//
// Example:
// var a = 1;

// function random() {
//     var b = Math.random();
//     console.log(b);
//     console.log(a);
// }
//
// console.log(b); // This line will produce an error, since `b` here is a local variable
//
// random();
//
// Another example:
// var a = 1;
// var b = 2;

// function random() {
//     b = Math.random();
//     console.log(b);
//     console.log(a);
// }

// console.log(b); // Now that we have declared `b = 2;`, this line will not result in error anymore.
// // But, the value of b, although seems to be changed by line 25, is still equals to 2. Because the random() function is not yet executed, only declared.
// random();
// console.log(b); // Now that random() has been executed, the value of b is changed randomly.
//
//
// But this is changing a global variable's value in a function.
// What if we re-declare that variable inside a function?
var a = 1;
var b = 2;

function random() {
    var b = Math.random();
    console.log(b);
    console.log(a);
}

console.log(b); // this returns 2
random(); // this returns a random value of b and 1
console.log(b); // this returns 2

// This happens because `random()` recognize b as a new local variable. When the compiler exit the block, local varible b is not available anymore.
//
// We should always minimize the scope of a variable.
// Changing a variable's value should be done in a general way, not applying directly the change to the variable.
// We do this by giving parameters to functions.