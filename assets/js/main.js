
$(document).ready(function () {

  $('.header-navbar__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });

});

/* #1 */
var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
first: 'First Name',
last: 'Last Name'
};
console.log ('myNum: ', myNum);
console.log ('myStr: ', myStr);
console.log ('myBool: ', myBool);
console.log ('myArr: ', myArr);
console.log ('myObj: ', myObj);

/* #2 */
var decimal2 = myNum.toFixed(2);

/* #3 */
var i = 0;
console.log ('Префиксный инкремент: ', ++i);
console.log ('Постфиксный инкремент: ', i++);
console.log ('Значение i: ', i);
console.log ('Префиксный декремент: ', --i);
console.log ('Постфиксный декремент: ', i--);
console.log ('Значение i: ', i);

/* #4 */
var myTest = 20;
myTest += myNum;
console.log ('+=', myTest);
myTest -= 4;
console.log ('-=', myTest);
myTest *= 2;
console.log ('*=', myTest);
myTest /= 3;
console.log ('/=', myTest);
myTest %= 25;
console.log ('%', myTest);

/* #5 */
var myPi = Math.PI;
console.log ('myPi: ', myPi);
var myRound = Math.round(89.279);
console.log ('myRound: ', myRound);
var myRandom = Math.random() * 10;
console.log ('myRandom: ', myRandom);
var myPow = Math.pow(3, 5);
console.log ('myPow: ', myPow);

/* #6 */
var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log ('srtObj = ', strObj);

/* #7 */
var isRamaPos = strObj.str.indexOf('рама');
console.log ('isRamaPos: ', isRamaPos);

/* #8 */
var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log ('strReplace: ', strReplace);

/* #9 */
console.log(myStr.toUpperCase());
console.log(strReplace.toLowerCase());