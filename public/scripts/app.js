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
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

// 1: create a new template - JSX
// 2: root div
// 3: Render it.

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Steve Ingram'
  ),
  React.createElement(
    'p',
    null,
    'Age: 52'
  ),
  React.createElement(
    'p',
    null,
    'Location: Berlin'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
