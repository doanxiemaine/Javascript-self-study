// async await (Node 7.6 or above)

var fs = require('fs');
const { resolve } = require('path');

function readFilePromise(path) {
    return new Promise(function(resove, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function run() {
    // node co is actually the transition from promise to async await. Thus the syntax is similar, use `await` instead of `yield`
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    console.log(song1, song2);
    return [song1, song2]; // return the array of promises.
}

// Hence, async functions will be able to use then() to manipulate promises.
run().then(function(values) {
    console.log(values);
})