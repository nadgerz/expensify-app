// arguments object - no longer bound with arrow functions

const add = ( a, b ) => {
  return a + b;
};
// console.log(add(55, 1));
console.log( add( 55, 1, 1001 ) );

const addES5 = function( a, b ) {
  console.log( arguments );
  return a + b;
};

// console.log(addES5(55, 1));
console.log( addES5( 55, 1, 1001 ) );

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map( ( city ) => this.name + ' has lived in ' + city );
  }
};
console.log( user.printPlacesLived() );

const userES5 = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function() {
    console.log( this.name );
    console.log( this.cities );
    
    this.cities.forEach( function( city ) {
      console.log( city );
      console.log( this.name + ' has lived in ' + city );
    } );
  }
};
console.log( userES5.printPlacesLived() );

// Challenge area

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map( ( number ) => number * this.multiplyBy );
  }
};

console.log( multiplier.multiply() );
