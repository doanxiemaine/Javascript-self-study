// node module system

// function Mouse(color) {
//     this.color = color;
//     this.isDead = false;
// };

// Mouse.prototype.die = function() {
//     this.isDead = true;
// };
// --> moved to Session29-mouse.js

var Mouse = require('./Session29-mouse'); // include the Mouse constructor function into this js file, so we can call Mouse() in here
var Cat = require('./Session29-cat'); // include the Cat constructor function into this js file, so we can call Cat() in here

// function Cat() {
//     this.stomach = [];
// };

// Cat.prototype.eat = function(mouse) {
//     this.stomach.push(mouse);
//     mouse.die();
//     return this;
// };

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);

console.log(tom);