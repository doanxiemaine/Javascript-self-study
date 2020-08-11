// Mapping in Javascript
// arr.map(function(item){
    //transform
    //return newValue;
//});

var numbers = [1, 2, 3, 4];
var squaredNumbers = numbers.map(function(x) {
    return x*x;
});
console.log(squaredNumbers); //returns array squaredNumbers = [1, 4, 9, 16]

// exercise
// from an array of many rectangles, each rectangle has width and height, use map() method to make a new array consist of their area
let rectangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16}
]

let rectangleAreas = rectangles.map(function(rec) {
    return rec.width * rec.height;
});
console.log(rectangleAreas);