// while, do ... while loops
//
// Syntax:
//
// while (condition) {
//     do something
// }

var i = 1;

while (i <= 10) { // If `i` <= 10, run the block below, after the block is executed, jump back to this line to check condition
    console.log(i);
    ++i; // we need to add this code to increase i, or infinite loop is met, since `while` does not edit the given condition,
}

// Syntax:
//
// do {
//    do something    
// } while (condition)
//
// The syntax above is another implementation of while, but `do` block is executed one before condition is check, then back to `do` block if condition is met.