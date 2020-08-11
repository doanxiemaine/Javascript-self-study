// prototype in Javascript

// Constructor function: 
//      Being used with keyword `new` to create new objects.
//      Naming with noun, with first character uppercased.

// Normal function:
//      Being called to perform some specific task.
//      Naming with verbs following camelCase convention.

// Function is also an object 
// --> Every function have a property: .prototype

// Every prototype have a property: .constructor, calling back to the Function

function Mouse(color, weight) {
    this.type = 'mouse',
    this.color = color,
    this.weight = weight

    // function sleep() {
    //     console.log('Sleeping...');
    // }
};

console.log(Mouse.prototype); // returns Mouse{}

console.log(Mouse.prototype.constructor); // returns [Function: Mouse]

console.log(Mouse.prototype.constructor === Mouse); // returns true --> .constructor in .prototype links back to Function

// Prototype object is shared among all the objects created using new

Mouse.prototype.sleep = function() {
    console.log('Sleeping...');
}

var jerry = new Mouse('orange', 20);
var mickey = new Mouse('white', 10);
console.log(jerry.sleep === mickey.sleep); // if we use the commented part in Mouse, every object of Mouse will have that sleep() method, but even though the content are all 'Sleeping...', === comparison will always returns false, since different objects
// on the other hand, if we use prototype, === will return true in this case, since it is shared. --> save memory when running program
