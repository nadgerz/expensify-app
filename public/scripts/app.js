'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
  _classCallCheck(this, Person);

  // console.log( 'test' );
  // console.log( name );
  this.name = name;
};

var me = new Person('Steve Ingram');
console.log(me);
var other = new Person();
console.log(other);
