// if ... else if ... else
//
// Syntax:
// if (condition1) {
//    statement1; --> execute this statement if condition1 is true
// } else if (condition2) { --> if condition1 is false, we consider if condition2 is true or not
//    statements2; --> execute this statement if condition2 is true
// } else { --> then if condition2 is also false
//    statement3; --> this statement3 is executed
// }

// Example: calculate bus ticket fee
// - if age < 15, discount 20%
// - if age > 60, discount 10%
// - otherwise 10000/ticket

function getTicketFee(person) {
    var basePrice = 10000;

    if (person.age < 15) {
        return basePrice * 0.8;
    } else if (person.age > 60) {
        return basePrice * 0.9;
    } else {
        return basePrice;
    }
}

var person = { 
    age: 69 
};
var fee = getTicketFee(person);
console.log(fee);