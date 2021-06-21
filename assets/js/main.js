/* Домашнее задание №2 */
/* #1 */
var userObj = {
  firstName: 'Tatyana',
  lastName: 'Dedyulya',
  age: 37,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};
  
/* #2 */
console.log(userObj);
console.log(userObj.fullName());

/* #3 */
function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr());

/* #4 */
function evenFn(n) {
  let arr = [];
  for (let i=1; i<=n; i++) if (i % 2 ===0) arr.push(i);
  return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

/* #5 */
function weekFn(n) {
  let str = '';
  switch (n) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье';
      break;
    default:
      str = null;
  }
  return str;
}
console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(7));
console.log(weekFn(0.5));
console.log(weekFn(10));
console.log(weekFn('5'));

/* #6 */
function ageClassification(n) {
  return n < 0 ? null :
  n <= 24 ? 'детский возраст' :
  n <= 44 ? 'молодой возраст' :
  n <= 65 ? 'средний возраст' :
  n <= 75 ? 'пожилой возраст' :
  n <= 90 ? 'старческий возраст' :
  n <= 122 ? 'долгожители' : null;
}
console.log(ageClassification(14));
console.log(ageClassification(24.01));
console.log(ageClassification(50));
console.log(ageClassification(75));
console.log(ageClassification(123));
console.log(ageClassification(-1));

/* #7 */
function oddFn(n) {
  let arr = [];
  let i = 0;
  while (i++ < n) if (i % 2 !==0) arr.push(i);
  return arr;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

/* #8 */
function mainFunc(a, b, func) {
  if (func && typeof func === 'function') return func(a, b);
  return false;
}
function cbRandom(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function cbPow(a, b) {
  return Math.pow(a, b);
}
function cbAdd(a, b) {
  return a + b;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));