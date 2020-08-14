// Callback hell
var fs = require('fs');

fs.readFile('./song1.txt', { encoding: 'utf8' }, function(err, song1) {
    console.log(song1);
    fs.readFile('./song2.txt', { encoding: 'utf8' }, function(err, song2) {
        console.log(song2);
        fs.readFile('./song3.txt', { encoding: 'utf8' }, function(err, song3) {
            console.log(song3);
        });
    });
});
// The code block above is called `Callback hell`, similar to nested for loops or nested if, it is hard for programmers to follow the output of the code.