class Person {
  constructor( name = 'Anonymous', age = 0 ) {
    this.name = name;
    this.age = age;
  }
  
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}


const me = new Person( 'Steve Ingram', 52 );
console.log( me.getGreeting() );
console.log( me.getDescription() );

const other = new Person();
console.log( other.getGreeting() );
console.log( other.getDescription() );

const boop = new Person( undefined, 18);
console.log( boop.getGreeting() );
console.log( boop.getDescription() );
