class Person {
  constructor( name = 'testy' ) {
    // console.log( 'test' );
    // console.log( name );
    this.name = name;
  }
}


const me = new Person( 'Steve Ingram' );
console.log( me );
const other = new Person();
console.log( other );