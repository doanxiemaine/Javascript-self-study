// Arithmetic Operators
// Increment ++
// Decrement --
// * / %
// + / -

var a = 5;
a--; // 5
a; // 4
--a; 3

var b = 5;
   b++ + ++b;
// 5   + ++b // b=6
// 5   + 7   = 12

var c = 5;
   c++ + ++c - --c + c--;
// 5   + ++c - --c + c--  //c=6
// 5   + 7   - --c + c--  //c=7
// 5   + 7   - 6   + c--  //c=6
// 5   + 7   - 6   + 6    //c=5
// = 12

var d = 5;
var e = 10;

    d++ * e-- + --d * ++e;
//  5   * 10  + --d * ++e  //d=6  e=9
//  5   * 10  + 5   * 10   //d=5  e=10
//  = 100