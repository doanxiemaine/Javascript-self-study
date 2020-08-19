// Promise
// Before using, we need to install this module using NPM:
// `npm i --save promise-fs`
// var promisefs = require('promise-fs'); // use promise-fs

// Block A:
// promisefs.readFile('song1.txt', { encoding: 'utf8' })
//     .then(function(song1) {
//         console.log(song1);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// ===> This block of code can only read 1 file.

// function onDone(song) {
//     console.log(song);
// }

// function onError(error) {
//     console.log(error);
// }

// function readFile(path) {
//     return promisefs.readFile(path, { encoding: 'utf8' }); // promisefs.readFile() returns a promise, which means function readFile() also returns that promise, since we let the promise from promisefs return in the code block
// }

// readFile('song1.txt')
//     .then(onDone)
//     .catch(onError);
// // This is an equivalent of block A.

// // Now, we want to read file song1.txt, then song2.txt
// readFile('song1.txt')
//     .then(onDone) // this onDone is to execute the promise from readFile('song1.txt')
//     .then(function() {
//         return readFile('song2.txt'); // `return` is required here, even tho readFile() itself has its own `return` already, that `return` is to return type of readFile().
//             // if there's no `return`, this function is returned `undefined`
//     })
//     .then(onDone) // while this onDone is to execute that of readFile('song2.txt')
//     .catch(onError);
// // --> Result:
// //          Song 1
// //          Song 2


// What `promise` really means:
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) { // resolve will be called when the function is successfully executed. reject will be call when the function meets error. 
        fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
            if (err) { // if error is not null, or is an object.
                reject(err);
            } else { // if error is null, or no error.
                resolve(data);
            }            
        });
    });
}

readFilePromise('song2.txt')
    .then(function(song1) {
        console.log(song1); // if `promise` is successfully returned, `resolve` is called, along with `data`. `data` is transferred to then()
    })
    .catch(function(error) {
        console.log(error); // if `promise` meets error, `reject` is called, along with the `error`. `error` is transferred to catch()
    }); // this is an example of then()

readFilePromise('song4.txt')
    .then(function(song1) {
        console.log(song1); 
    })
    .catch(function(error) {
        console.log(error); 
    }); // this is an example of catch()