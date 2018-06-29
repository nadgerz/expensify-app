import React from 'react';
import ReactDOM from 'react-dom';
// import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

// console.log( validator.isEmail( 'stephen.a.ingram@gmail.com' ) );
console.log( isEmail( 'stephen.a.ingram@gmail.com' ) );

const template = <p>testing 123</p>;

ReactDOM.render( template, document.getElementById( 'app' ) );
