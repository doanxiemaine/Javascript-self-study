// for loop
// for (init; condition; final-expression) {
//    statements;
//} --> exit loop if condition is false
// Rule: 'init' is called first, 'condition' is checked second, 'statements' are executed, then 'final-expression' done last

var employees = [
    { name: 'Duy', age: 21 },
    { name: 'A', age: 20 },
    { name: 'B', age: 19 }
];

for (var i = 0; i < 3; i++) {
    console.log(employees[i].name, employees[i].age);
}