// JSON object methods

// 1. stringify() - Convert an object to an JSON string
var myDog = {
    name: 'Spike',
    age: 3,
    isDead: false
};
var myDogString = JSON.stringify(myDog);

console.log(myDog, typeof myDog); // returns `{ name: 'Spike', age: 3, isDead: false }` and specified that `myDog` is an object
console.log(myDogString, typeof myDogString); // returns `{"name":"Spike","age":3,"isDead":false}` and specified that `myDogString` is a string
// --> in JSON strings, properties are put in "", if property's value is String, it will also be in "", integer, float, boolean are not.

// 2. parse() - Convert an JSON String to an object
var myCatString = '{"name": "Tom", "age": 2, "isDead": false}';
var myCat = JSON.parse(myCatString);

console.log(myCatString, typeof myCatString); // returns `{"name": "Tom", "age": 2, "isDead": false}` and specified that `myCatString` is a string
console.log(myCat, typeof myCat); // returns `{ name: 'Tom', age: 2, isDead: false }` and specified that `myCat` is an object.

// exercise:
// build a program with 3 options:
// 1. Show all students.
// 2. Create a new student. A student can have name, age, class,...
// 3. Save & Exit.
// Save data to ./data.json.

// --> Solution:
const readlineSync = require('readline-sync'); // from `npm`
const fs = require('fs'); // built-in package
// we need to specify which data object is already in the file, which is added by user, and which will be rewrite into the file
let currentData = []; // we need to declare an empty array to assign objects of students in data.json
let addedData = []; // and an empty array to assign objects of students added by users
let addedStudent = {}; // In this exercise, user only add one student at a time. Therefore we create an empty object for that student, then push 

// We want user to input one choice among three, so we will give a line of text and ask for user input. Since question() of readlineSync gives String type, we need to parseInt() to convert into integer
let choice = parseInt(readlineSync.question('What do you want to do?\n1. Show all students\n2. Create a new student\n3. Save & Exit.\nEnter your choice\'s number: '));
while (choice !== 3) { // Since third option is `Save & Exit`, we will give it an infinite loop until user input 3.
    if (choice === 1) { // If user type 1, we read the data.json file and show on console
        currentData = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf8' }));
        console.log(currentData);
    }
    else if (choice === 2) { // If user type 2, we give questions on student's info and save it into addedStudent,...
        addedStudent.name = readlineSync.question('Student\'s name? ');
        addedStudent.age = parseInt(readlineSync.question('Student\'s age? '));
        addedStudent.class = readlineSync.question('Student\'s class? ');
        addedData.push(addedStudent); // ...then push it into addedData array for file saving.
    } // After saving, we will show menu again
    choice = parseInt(readlineSync.question('What do you want to do?\n1. Show all students\n2. Create a new student\n3. Save & Exit.\nEnter your choice\'s number: '));
};
let finalData = currentData.concat(addedData);
fs.writeFileSync('./data.json', JSON.stringify(finalData)); // Overwrite the file with new data