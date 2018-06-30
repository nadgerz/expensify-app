import React from 'react';
import ReactDOM from 'react-dom';
// import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import IndecisionApp from './components/IndecisionApp';

// console.log( validator.isEmail( 'stephen.a.ingram@gmail.com' ) );
console.log( isEmail( 'stephen.a.ingram@gmail.com' ) );

ReactDOM.render( <IndecisionApp/>, document.getElementById( 'app' ) );
