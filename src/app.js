const name = 'Steve';

console.log( `${name}, app.js is running` );

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

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
  console.log( '+1', count );
};

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log( '-1' );
};

const reset = () => {
  count = 0;
  renderCounterApp();
  console.log( 'reset to 0' );
};

const appRoot = document.getElementById( 'app' );

const renderCounterApp = () => {
  
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      {/*<button onClick={() => console.log( 'KMA!' )}>+1</button>*/}
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  
  ReactDOM.render( templateTwo, appRoot );
  
};

renderCounterApp();