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