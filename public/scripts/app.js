'use strict';

console.clear();

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  return a + b;
};
// console.log(add(55, 1));
console.log(add(55, 1, 1001));

var addES5 = function addES5(a, b) {
  console.log(arguments);
  return a + b;
};

// console.log(addES5(55, 1));
console.log(addES5(55, 1, 1001));

// this keyword - no longer bound

var user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());

var userES5 = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
    var that = this;

    this.cities.forEach(function (city) {
      console.log(city);
      console.log(that.name + ' has lived in ' + city);
    });
  }
};
console.log(userES5.printPlacesLived());

// Challenge area

var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
