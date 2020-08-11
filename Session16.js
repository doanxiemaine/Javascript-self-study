// function as a parameter (callback)
// dùng function như một tham số
var coffeeMachine = {
    makeCoffee: function(onFinish) { //on.... is a naming convention in Javascript, to refer to the event
        console.log('Brrrrr... Making coffee...');
        onFinish();
    }
};

var beep = function() {
    console.log('Tít tít');
};

//beep(); //returns 'Tít tít' in console

//coffeeMachine.makeCoffee(); // returns 'Brrrrr... Making coffee...' in console

coffeeMachine.makeCoffee(beep); // here we use function beep() as parameter of function makeCoffee() in coffeeMachine object
//expected result: 
//'Brrrrr... Making coffee...'
//'Tít tít'

// If we don't want to use callback, we can use this instead
coffeeMachine.makeCoffee(function() {
    console.log('Bíp bíp');
});