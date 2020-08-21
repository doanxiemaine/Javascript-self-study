// Promise.all() method

var fs = require('fs');

// function readFilePromise(path) {
//     return new Promise(function(resolve, reject) { // resolve will be called when the function is successfully executed. reject will be call when the function meets error. 
//         fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
//             if (err) { // if error is not null, or is an object.
//                 reject(err);
//             } else { // if error is null, or no error.
//                 resolve(data);
//             }            
//         });
//     });
// }

// readFilePromise('./song1.txt')
//     .then(function(song1) {
//         console.log(song1);
//         return readFilePromise('./song2.txt'); 
//     })
//     .then(function(song2) {
//         console.log(song2);
//         return readFilePromise('./song3.txt');
//     })
//     .then(function(song3) {
//         console.log(song3);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// Instead of having many then() called, we can use Promise.all instead.

Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt')
]).then(function(values) { // then() will be called if and only if every promises are resolved.
    console.log(values); // The data comes from each promise's resolve() will be stored in an array.
}).catch(function(error) { // if one of the promises failed to resolve, or rejected, then error will be transfer to catch()
    console.log(error);
});