'use strict';

var name = 'Steve';

console.log(name + ', app.js is running');

var app = {
  title: 'My Big App',
  subTitle: 'This is more info',
  optionsX: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'h3',
    null,
    app.options && app.options.length > 0 ? 'Here are your options:'.toLocaleUpperCase() : 'No soup for you!'
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

var userName = 'Babble';
var userAge = 124;
var userLocation = 'Paris';

// const user = {
//   name: userName,
//   age: userAge,
//   location: userLocation
// };

var user = {};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name.toLocaleUpperCase() : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
