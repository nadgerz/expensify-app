console.clear();


class Person {
  constructor( name = 'Anonymous', age = 0 ) {
    this.name = name;
    this.age = age;
  }
  
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}


class Student extends Person {
  constructor( name, age, major ) {
    super();
    
    this.major = major;
  }
  
  hasMajor() {
    return !!this.major;
  }
}


const me = new Student( 'Steve Ingram', 52 );
console.log( me );
console.log( me.getGreeting() );
console.log( me.getDescription() );
console.log( me.hasMajor() );

const other = new Student();
console.log( other );
console.log( other.getGreeting() );
console.log( other.getDescription() );
console.log( other.hasMajor() );

const boop = new Student( undefined, 18, 'Computer Science' );
console.log( boop );
console.log( boop.getGreeting() );
console.log( boop.getDescription() );
console.log( boop.hasMajor() );
