// `new` keyword

var mouse = {
    weight: 0.2, // object literal
    getWeight: function() {
        return this.weight;
    }
};

//constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

var mouse1 = new Mouse('white', 0.2);
var mouse2 = new Mouse('black', 0.5);

console.log(mouse);
console.log(mouse1);
console.log(mouse2);
// --> If we declare an object by literal, we can only see its property, not its type, since there is actually no type at all
// But if we declare by keyword `new`, we can see its object type, also, object's property values are set through constructor function's parameters.

var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse);
        return this; // --> By returning `this` at the end of the method, tom's stomach is applied after eat() method is called. Thus, it is possible to eat many mice in one code execution.
    }
};

var mouse3 = new Mouse('orange', 0.7);

tom.eat(mouse1).eat(mouse2).eat(mouse3);

console.log('Tom:');
console.log(tom);