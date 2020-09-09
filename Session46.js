// setInterval, clearInterval
//
// Syntax:
// setInterval(function, timeAmount);
//      ---> Every timeAmount, in ms, passed by, function will be executed once.
// var i = 0;
// setInterval(function() {
//     ++i;
//     console.log(i);
// }, 1000); // Count and print out the seconds pass by.

// clearInterval
//
// Syntax: same as setInterval
//      ---> Used to cancel the interval set before. If `setTimeout` returns timeoutId, then `setInterval` returns intervalId.
// Example:
// var i = 0;
// var intervalId = setInterval(function() {
//     ++i;
//     console.log(i);
//     if (i ===5) {
//         clearInterval(intervalId);
//     }
// }, 1000);

// Exercise:
// Write a function count from 1 to 10
//      return a promise
//
//      -->> Work:

var fs = require('fs');

function countFrom(a, b) {
    return new Promise(function(resolve, reject) {
        if (a <= b) {
            var data = [];
            var intervalId = setInterval(function() {
                data.push(a++);
                if(a === (b+1)) {
                    clearInterval(intervalId);
                    resolve(data);
                }
            }, 1000);
        } else {
            var error = 'Error! Cannot count from ' + a + ' to ' + b;
            reject(error);
        }
        
    });
}

countFrom(1, 10).then(function(values) {
    for (value of values) {
        console.log(value);
    }
    console.log('Done');
})
.catch(function(err) {
    console.log(err);
});