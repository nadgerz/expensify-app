'use strict';

console.clear();

var defaultButtonText = 'Show';

var app = {
  visible: false,
  buttonText: defaultButtonText
};

var toggleDetails = function toggleDetails() {
  app.visible = !app.visible;

  app.buttonText = defaultButtonText;

  if (app.visible) {
    app.buttonText = 'Hide';
  }

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
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      app.buttonText,
      ' Details'
    ),
    app.visible && React.createElement(
      'p',
      null,
      'Big Boobs!'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
