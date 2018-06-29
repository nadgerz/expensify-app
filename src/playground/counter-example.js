class Counter extends React.Component {
  constructor( props ) {
    super( props );
    
    this.handleAddOne = this.handleAddOne.bind( this );
    this.handleMinusOne = this.handleMinusOne.bind( this );
    this.handleReset = this.handleReset.bind( this );
    
    this.state = {
      count: props.count
    };
  }
  
  handleAddOneX() {
    console.log( 'handleAddOne' );
    this.setState( ( prevState, props ) => ({
      count: prevState.count + 1
    }) );
  }
  
  handleAddOneY() {
    console.log( 'handleAddOne' );
    this.setState( ( prevState ) => {
      return {
        count: prevState.count + 1
      };
    } );
  }
  
  handleAddOne() {
    console.log( 'handleAddOne' );
    this.setState( ( prevState ) => ({ count: prevState.count + 1 }) );
  }
  
  handleMinusOne() {
    console.log( 'handleMinusOne' );
    this.setState( ( prevState ) => ({
      count: prevState.count - 1
    }) );
  }
  
  handleResetX() {
    console.log( 'handleReset' );
    this.setState( ( prevState, props ) => ({
      count: 0
    }) );
  }
  
  handleReset() {
    console.log( 'handleReset' );
    this.setState( () => {
      return {
        count: 0
      };
    } );
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


Counter.defaultProps = {
  count: 0
};

ReactDOM.render( <Counter count={7}/>, document.getElementById( 'app' ) );