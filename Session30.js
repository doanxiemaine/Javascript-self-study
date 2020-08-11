// node built-in modules
var fs = require('fs'); // calling fileSync built-in module

var lyrics = fs.readFileSync('./song.txt', { encoding: 'utf8' }); // Read the file song.txt and save it as lyrics
// encoding: 'utf8' is required to output as text. If not, then output will be in buffer form

console.log(lyrics);

fs.writeFileSync('./statement.txt', 'Yoo Kang Kook'); // write a new file named `statement.txt` with content of `Yoo Kang Kook`