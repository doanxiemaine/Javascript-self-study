// Date
// var now  = new Date();
// var myBirthday = new Date(1999, 3, 18); // 17-4-1999
// console.log(myBirthday);

// // Even though logging `myBirthday` returns '1999-04-17T17:00:00.000Z',
// // both `now` and `myBirthday` are not actual date, they are the number of milliseconds from 1-1-1970 to now and `myBirthday`'s date.
// console.log(now.getTime()); // now.getTime() will return that milliseconds. This row will return different result everytime it is executed
// console.log(myBirthday.getTime()); // However, this line will result in '924282000000' milliseconds.

// moment.js
// run console command `npm install moment --save`
var moment = require('moment');

var now = moment();
console.log(now); // returns Moment<2020-09-10T09:04:08+07:00>

var time = moment('2019-05-21 00:00');
console.log(time.fromNow()); // returns 'a year ago'

// --> This is how facebook show when did a comment/post was made.