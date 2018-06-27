'use strict';

var name = 'Steve';

console.log(name + ', app.js is running');

/*
const app = {
  title: 'My Big App',
  subTitle: 'This is more info',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <h3>{(app.options && app.options.length > 0) ? 'Here are your options:'.toLocaleUpperCase() : 'No soup for you!'}</h3>
    
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);
*/

var count = 0;
var someId = 'myidhere';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { id: someId, className: 'button' },
    '+1'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
