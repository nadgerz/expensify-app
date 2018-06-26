'use strict';

var template = 'Steve';

console.log(template + ', app.js is running');

template = React.createElement(
  'h1',
  null,
  'Does this change?'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
