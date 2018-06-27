'use strict';

console.clear();

var name = 'Steve';

console.log(name + ', app.js is running');

var app = {
  title: 'My Big App',
  subTitle: 'This is more info',
  options: []
};

var handleOnFormSubmit = function handleOnFormSubmit(event) {
  event.preventDefault();

  // console.log( event );
  console.log('Form submitted');

  var option = event.target.elements.option.value;

  if (option) {
    console.log(option);
    app.options.push(option);

    event.target.elements.option.value = '';

    renderApp();
  }
};

var removeAll = function removeAll() {

  app.options = [];

  renderApp();
};

var onMakeDecision = function onMakeDecision() {

  var randomNum = Math.floor(Math.random() * app.options.length);

  var option = app.options[randomNum];

  alert(option);

  console.log(randomNum);

  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {

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
      'button',
      { onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ul',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
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
    ),
    React.createElement(
      'form',
      { onSubmit: handleOnFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
