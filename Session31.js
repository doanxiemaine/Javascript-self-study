// npm (node package manager)
// First we need to install the package we want to use. Here we want to use readlineSync, so we need to enter:
// `npm install reeadline-sync --save`
// as command line or git bash
// The option `--save` here is to save the installed package into `dependencies` of package.json
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var languages = [];

var language = readlineSync.question('What is your mother language? ');
languages.push(language);

console.log(languages);

var pet = {};

var name = readlineSync.question('Your pet name? ');
var gender = readlineSync.question('Pet gender? (Male/Female) ');
var weight = readlineSync.question('Weight? ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight); // Here we use function parseInt() to give pet.weight integer value, instead of string

console.log(pet);