// node co module

var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// co(function*() { // The `*` here is to note that this is a generator function
//     // var song1 = yield readFilePromise('./song1.txt'); // `yield` keyword is called along with a promise.
//     // // When the promise is resolved, we assign the data to a variable `song1`.
//     // var song2 = yield readFilePromise('./song2.txt');
//     // var song3 = yield readFilePromise('./song3.txt');
//     // // console.log(song1, song2, song3);
//     // return [song1, song2, song3];

//     // we can also use yield with an array
//     var values = yield [
//         readFilePromise('./song1.txt'),
//         readFilePromise('./song2.txt'),
//         readFilePromise('./song3.txt')
//     ];
//     return values;
// }).then(function(values) { // This co() actually returns a promise, we can use then().
//     console.log(values);
// }).catch(function(error) {
//     console.log(error);
// });

// If we don't want to call and use `co` module directly, we can use:
// co module have a method: wrap(). We can use this to make a function
var readFiles = co.wrap(function*(files) { // co.wrap() does not return any promises, it only returns a function. The generator function is the one returning promises.
    // the function called by co.wrap() will have the same parameters as those of its generator function.
    // [String] --> [Promise] => Use map()
    var values = yield files.map(function(file) {
        return readFilePromise(file);
    });
    return values; // return the promises for generator function
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
    .then(function(values) {
        console.log(values);
    });