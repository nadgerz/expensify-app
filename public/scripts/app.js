"use strict";

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
