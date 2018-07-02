import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import './styles/styles.scss';
/*
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

console.log( validator.isEmail( 'stephen.a.ingram@gmail.com' ) );
console.log( isEmail( 'stephen.a.ingram@gmail.com' ) );
*/
ReactDOM.render( <IndecisionApp/>, document.getElementById( 'app' ) );

/*
class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getOldGreeting = this.getOldGreeting.bind( this );
  }
  
  getOldGreeting() {
    return `Hi. My name is ${this.name}.`;
  }
}


const oldSyntax = new OldSyntax();
const getOldGreeting = oldSyntax.getOldGreeting;
console.log( oldSyntax );
console.log( oldSyntax.getOldGreeting() );
console.log( getOldGreeting() );

// ---------

class NewSyntax {
  name = 'Frank';
  
  getNewGreeting = () => {
    return `Hi. My name is ${this.name}.`;
  };
}


const newSyntax = new NewSyntax();
console.log( newSyntax );
console.log( newSyntax.getNewGreeting() );
const getNewGreeting = newSyntax.getNewGreeting;
console.log( getNewGreeting() );

*/
