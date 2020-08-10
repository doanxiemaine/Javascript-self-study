// Function

function calculateAreaOfTriangle(a, h) {
    return a * h / 2;
}

//Calculate the area of a triangle with base a = 10, height h = 5
console.log(calculateAreaOfTriangle(10, 5));

function calculateAreaOfDisc(r) {
    return r * r * 3.14;
}

//Calculate the area of a circular disc with radius r = 10
console.log(calculateAreaOfDisc(10));

//Exercise
//Calculate the area of a square
function calculateAreaOfSquare(a) {
    return a * a;
}

//Calculate the perimeter of a square
function calculatePerimeterOfSquare(a) {
    return a * 4;
}

//Calculate the area of a rectangle
function calculateAreaOfRectangle(w, l) {
    return w * l;
}

//Calculate the perimeter of a square
function calculatePerimeterOfRectangle(w, l) {
    return (w + l) * 2;
}

//Calculate the perimeter of a circular disc
function calculatePerimeterOfDisc(r) {
    return 2 * 3.14 * r;
}

//Calculate the perimeter of a triangle
function calculatePerimeterOfTriangle(a, b, c) {
    return a + b + c;
}