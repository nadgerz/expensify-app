console.clear();

const defaultButtonText = 'Show';

const app = {
  visible: false,
  buttonText: defaultButtonText
};

const toggleDetails = () => {
  app.visible = !app.visible;
  
  app.buttonText = defaultButtonText;
  
  if ( app.visible ) {
    app.buttonText = 'Hide';
  }
  
  renderApp();
};

const appRoot = document.getElementById( 'app' );

const renderApp = () => {
  
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>{app.buttonText} Details</button>
      {app.visible && <p>Big Boobs!</p>}
    </div>
  );
  
  ReactDOM.render( template, appRoot );
};

renderApp();
