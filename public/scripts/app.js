'use strict';

var square = function square(x) {
  return x * x;
};

function namedFunc(x) {
  return x * x;
}

var squareArrow = function squareArrow(x) {
  return x * x;
};

var tripleArrow = function tripleArrow(x) {
  return Math.pow(x, 3);
};

console.log(square(8));
console.log(namedFunc(7));
console.log(squareArrow(5));
console.log(tripleArrow(3));

var getFirstName1 = function getFirstName1(name) {
  return name.split(' ')[0];
};

var getFirstName2 = function getFirstName2(name) {
  return name.split(' ')[0];
};

var name = 'Steve Ingram';

console.log(getFirstName1(name));
console.log(getFirstName2(name));
