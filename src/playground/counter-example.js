class Counter extends React.Component {
  constructor( props ) {
    super( props );
    
    this.handleAddOne = this.handleAddOne.bind( this );
    this.handleMinusOne = this.handleMinusOne.bind( this );
    this.handleReset = this.handleReset.bind( this );
    
    this.state = {
      count: 0
    };
  }
  
  handleAddOne() {
    console.log( 'handleAddOne' );
    this.setState( ( prevState, props ) => ({
      count: prevState.count + 1
    }) );
  }
  
  handleMinusOne() {
    console.log( 'handleMinusOne' );
    this.setState( ( prevState, props ) => ({
      count: prevState.count - 1
    }) );
  }
  
  handleReset() {
    console.log( 'handleReset' );
    this.setState( ( prevState, props ) => ({
      count: 0
    }) );
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}


ReactDOM.render( <Counter/>, document.getElementById( 'app' ) );

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log( '+1', count );
//
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log( '-1' );
//
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log( 'reset to 0' );
//
// };
// const appRoot = document.getElementById( 'app' );
//
// const renderCounterApp = () => {
//
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       {/*<button onClick={() => console.log( 'KMA!' )}>+1</button>*/}
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render( templateTwo, appRoot );
//
// };
//
// renderCounterApp();