// if ... else

// Syntax:
// if (condition) {
//    statement(s) when true;
// } else {
//    statement(s) when false;
//}

// Example 1: Toss a coin
function tossCoin() {
    var value = Math.random();
    if (value < 0.5){
        console.log('Head');
    } else {
        console.log('Tail');
    }
};

tossCoin();

// Example 2: Fake money detector
var total = 0;

var bills = [
    {value: 1000},
    {value: 2000},
    {value: 5000},
    {value: 10000},
    {value: 20000},
    {value: 50000},
    {value: 100000, isFake: true},
    {value: 200000},
    {value: 500000},
];

function countBills(bills) {
    total = 0;

    for (var bill of bills) { // loop through each bill object of array bills
        if (!bill.isFake) {
            total += bill.value; // if the current counting bill is not fake, we add it into total
        } else {
            console.log('fake bill', bill); // if the current counting bill is fake, stop counting and alert fake bill
        }
    }

    return total;
}

total = countBills(bills);
console.log(total);