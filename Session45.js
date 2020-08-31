// setTimeout, clearTimeout
//
// Syntax: setTimeout(function, timeAmount)
//      where timeAmount is in milliseconds, function will be executed after timeAmount is up.
//
// Example:
console.log('Start!');
setTimeout(function() { // anonymous function
    console.log('Finished!');
}, 1000);
console.log('Done!');

// Result of the above block: 
//      Start!
//      Done!
//      Finished!
// `Finished!` is returned after `Done` since it has been delayed by setTimeout to 1s, or 1000ms.
//
// If we don't want to `setTimeout` anymore, we can use `clearTimeout` to cancel the timeout.
// Since setTimeout() function returns a timeoutId, we will assign the specific setTimeout function we want to clear to a variable.
// Example:
console.log('Start counting!');
var timeoutId = setTimeout(function() { // anonymous function
    console.log('1...');
}, 1000);
console.log('Done!');
clearTimeout(timeoutId); // '1...' will not be logged in console. Since we have cleared then timeout.