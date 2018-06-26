'use strict';

var name = 'Steve';

console.log(name + ', app.js is running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
