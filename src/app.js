console.clear();

const name = 'Steve';

console.log( `${name}, app.js is running` );

const app = {
  title: 'My Big App',
  subTitle: 'This is more info',
  options: []
};

const handleOnFormSubmit = ( event ) => {
  event.preventDefault();
  
  // console.log( event );
  console.log( 'Form submitted' );
  
  const option = event.target.elements.option.value;
  
  if ( option ) {
    console.log( option );
    app.options.push( option );
    
    event.target.elements.option.value = '';
    
    renderApp();
  }
};

const removeAll = () => {
  
  app.options = [];
  
  renderApp();
  
};

const onMakeDecision = () => {
  
  const randomNum = Math.floor( Math.random() * app.options.length );
  
  const option = app.options[randomNum];
  
  alert( option );
  
  console.log( randomNum );
  
  renderApp();
};

const appRoot = document.getElementById( 'app' );

const renderApp = () => {
  
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <h3>{(app.options && app.options.length > 0) ? 'Here are your options:'.toLocaleUpperCase() : 'No soup for you!'}</h3>
      
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      
      {/*
      <ul>
        {
          ['one', 'two', 'three'].map( ( bibble, index ) => {
            return (
              <li key={index}>{bibble}</li>
            );
          } )
        }
      </ul>
*/}
      
      <ul>
        {
          app.options.map( ( option ) => <li key={option}>{option}</li> )
        }
      </ul>
      
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      
      <form onSubmit={handleOnFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render( template, appRoot );
};

renderApp();
