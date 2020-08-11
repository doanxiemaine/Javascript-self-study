// ternary operator (toán tử)
//
// Syntax:
// condition ? expression-when-true : expression-when-false
function tossCoin() {
    var value = Math.random();
    var result = (value < 0.5) ? 'Tail' : 'Head'; // This line is the equivalent of the commented block of code below

    // if (value < 0.5) {
    //     result = 'Tail';
    // } else {
    //     result = 'Head';
    // }

    console.log(result);
}

tossCoin();