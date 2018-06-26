'use strict';

var template = 'Steve';

console.log(template + ', app.js is running');

template = React.createElement(
  'p',
  null,
  'This is JSX from app.js'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
