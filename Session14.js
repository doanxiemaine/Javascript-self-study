//for ... of, for ... in
var employees = [
    { name: 'Duy', age: 21 },
    { name: 'A', age: 20 },
    { name: 'B', age: 19 }
];

for (var employee of employees) {
    console.log(employee.name, employee.age);
} // for ... of is for looping through the objects in the array

var myDog = {
    name: 'Đần',
    age: 1,
    weight: 5
};

for (var key in myDog) {
    console.log(key, myDog[key]);
} // for ... in is for looping through the attributes of object

for (key in employees) {
    console.log(key, employees[key]);
}