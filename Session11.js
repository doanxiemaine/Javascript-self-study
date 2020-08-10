// Object methods
// Everything in Javascript is an object, a function of an object is called a method

var myDog = {
    weight : 5.2,
    name : 'Đần',
    age : 1,
    bark : function() { // A function without name is called anonymous function. This declaration also means we function bark(){...}
        console.log('Mèo méo meo mèo meo, watashi wa', this.name); // 'this' keyword is used within the method's context. 'this.name' here stands for 'myDog.name'
    }, // This function is returning undefined, or, there is no return.
    eat : function(bone) {
        this.weight = this.weight + bone.weight; //myDog's weight will increase after eating the 'bone'
    }
}; //If an unidentified property of an object is called, 'undefined' is returned, instead of giving error.

var bone = {
    weight : 0.5
};

console.log(myDog);

myDog.bark();

console.log('Before eating:', myDog.weight);

myDog.eat(bone);

console.log('After eating:', myDog.weight);