class Person {
  constructor( name ) {
    // console.log( 'test' );
    // console.log( name );
    this.name = name || 'test';
  }
}


const me = new Person( 'Steve Ingram' );
console.log( me );
const other = new Person();
console.log( other );