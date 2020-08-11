// switch ... case
//
// Syntax:
// switch (expression) {
//     case value1: --> compare value1 with expression
//         // do something;
//         break;
//     case value2: --> compare value2 with expression
//         // do something;
//         break;
//     ...
//     default: --> if none of the values above meet expression, do things here
//         // do something;
//         break;
// }

// Example: A sushi restaurant have the following membership cards: Bronze, Silver, Gold, Diamond
//          Bronze, Silver, Gold, Diamond member gets 2%, 5%, 8%, 10% off on total bill, respectively. 
var memberCard = {
    tier: 'bronze'
};

function getTotal(price, card) {
    var discountRate;

    switch (card.tier) {
        case 'bronze': // if card.tier === 'bronze'
            discountRate = 0.02;
            break;
        case 'silver': // if card.tier === 'silver'
            discountRate = 0.05;
            break;
        case 'gold': // if card.tier === 'gold'
            discountRate = 0.08;
            break;
        // if none of the cases above
        default: // or case 'diamond':
            discountRate = 0.05;
            break; // if we don't add break at the end of case, switch() will continue until it reaches `break` at any case, or reaches end of switch()
    } // this switch() function is the equivalent of the commented block of code below

    // if (card.tier === 'bronze') {
    //     discountRate = 0.02;
    // } else if (card.tier === 'silver') {
    //     discountRate = 0.05;
    // } else if (card.tier === 'gold') {
    //     discountRate = 0.08;
    // } else {
    //     discountRate = 0.1;
    // }

    return price * (1 - discountRate);
}

console.log(getTotal(500000, memberCard));

// Example: traffic light
var trafficLight = 'green';

function goOrNot(lightValue) {
    switch(lightValue) {
        case 'green':
            console.log('Go');
            break;
        case 'yellow':
            console.log('Slow down');
            break;
        case 'red':
            console.log('Stop');
            break;
    }
}

goOrNot(trafficLight);