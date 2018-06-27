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

var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('+1', count);
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log('-1');
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log('reset to 0');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

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
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
