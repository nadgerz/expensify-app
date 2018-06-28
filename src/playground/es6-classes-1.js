class Person {
  constructor( name = 'Anonymous' ) {
    this.name = name;
  }
  
  getGreeting() {
    return 'Hi ' + this.name;
  }
}


const me = new Person( 'Steve Ingram' );
console.log( me.getGreeting() );

const other = new Person();
console.log( other.getGreeting() );