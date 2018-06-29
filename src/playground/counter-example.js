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
  
  componentDidMount() {
    console.log( 'cwm' );
    
    try {
      const json = localStorage.getItem( 'count' );
      let count = JSON.parse( json );
      
      if ( !count ) {
        console.log( 'nullie' );
        count = 0;
      }
      
      if ( isNaN( count ) ) {
        count = 0;
      }
      
      this.setState( () => ({ count }) );
    }
    catch ( e ) {
      // Do nothing. Default count to 0.
    }
  }
  
  componentDidUpdate( prevProps, prevState ) {
    console.log( 'cdu' );
    
    // could use parseInt, but we need to protect against NaN
    
    if ( prevState.count !== this.state.count ) {
      const json = JSON.stringify( this.state.count );
      localStorage.setItem( 'count', json );
    }
  }
  
  handleAddOne() {
    console.log( 'handleAddOne' );
    this.setState( ( prevState ) => ({ count: prevState.count + 1 }) );
  }
  
  handleMinusOne() {
    console.log( 'handleMinusOne' );
    this.setState( ( prevState ) => ({ count: prevState.count - 1 }) );
  }
  
  handleReset() {
    console.log( 'handleReset' );
    this.setState( () => ({ count: 0 }) );
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


/*
Counter.defaultProps = {
  count: 0
};
*/

ReactDOM.render( <Counter count={7}/>, document.getElementById( 'app' ) );