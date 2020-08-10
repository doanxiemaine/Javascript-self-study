// Array Lesson
// -> We use array to list similar objects, e.g. contacts, students,...

var dog1 = {
    type: 'chó ta'
};

var dog2 = {
    type: 'lạp xưởng'
};

var dog3 = {
    type: 'husky'
};

var bunchOfDogs = [dog1, dog2, dog3]; //put dogs into Array

console.log(bunchOfDogs[2]); //get the dog3 at slot 2 of Array

var dog4 = {
    type: 'shiba'
};

bunchOfDogs[0] = dog4; //replace dog1 with dog4

console.log(bunchOfDogs);

//Exercise: Create a class list, containing all student in that class.
var student1 = {
    name: 'A',
    ID: 'ITITIU19001'
};

var student2 = {
    name: 'B',
    ID: 'ITITIU19002'
};

var student3 = {
    name: 'C',
    ID: 'ITITIU19003'
};

var student4 = {
    name: 'D',
    ID: 'ITITIU19004'
};

var student5 = {
    name: 'E',
    ID: 'ITITIU19005'
};

var student6 = {
    name: 'F',
    ID: 'ITITIU19006'
};

var student7 = {
    name: 'G',
    ID: 'ITITIU19007'
};

var student8 = {
    name: 'H',
    ID: 'ITITIU19008'
};

var student9 = {
    name: 'I',
    ID: 'ITITIU19009'
};

var classA = [student1, student3, student5, student7];

var classB = [student2, student4, student6, student8];

var classC = [student1, student5, student9];

console.log(classA);
console.log(classB);
console.log(classC);