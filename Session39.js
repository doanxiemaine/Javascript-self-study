// Sync. vs Async.

var fs = require('fs');

console.log('Start');

var song1 = fs.readFileSync('song1.txt', { encoding: 'utf8' });
console.log(song1);

var song2 = fs.readFileSync('song2.txt', { encoding: 'utf8' });
console.log(song2);

console.log('End');

// Make coffee --> 5 minutes
// Wear clothes
// Making bed
//
// Sync:
// |------------------------|-----------------------------------|---------------------------|----------->
// Make coffee.             Coffee done.                        Worn clothes.               Done.
//  Br.....                 Then wear clothes.                  Make bed.
//
// -----> Takes too much times, with time wasted.
//
// Async:
// |------------------------|---------------------------|-----------------------|----------------------->
// Make coffee.     Wear clothes,                       Worn clothes.           Bed made.
//                  while coffee is being made.         Make bed.               Go get coffee.
//
// -----> We don't have to wait for coffee to do other things.

console.log('Start');
fs.readFile('song1.txt', { encoding: 'utf8' }, function(err, song1) {
    console.log(song1);
});
console.log('End');

// Result:
// Start
// End
// Song1 // Content of song1.txt
// -----> Since it is asynchronous, the file don't have to wait until block of code from line 34 to 36 to finish loading.
//          That means when the file reaches line 34, it automatically jump to line 37, the next line of code to be executed.

// =====> This is great if we are to reduce the time a page load. Since the protocols for loading webpages are time consuming.
//          If we let users wait until everything is loaded, that would be a bad thing.