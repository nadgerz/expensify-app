class IndecisionApp extends React.Component {
  
  constructor( props ) {
    super( props );
    
    this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
    this.handlePick = this.handlePick.bind( this );
    this.handleAddOption = this.handleAddOption.bind( this );
    this.handleDeleteOption = this.handleDeleteOption.bind( this );
    
    this.state = {
      subTitle: 'Put your life in the hands of a computer',
      options: props.options
    };
  }
  
  componentDidMount() {
    console.log( 'Indecision: componentDidMount()' );
    console.log( 'fetch data' );
    
    try {
      const json = localStorage.getItem( 'options' );
      const options = JSON.parse( json );
      
      if ( options ) {
        this.setState( () => ({ options }) );
      }
    }
    catch ( e ) {
      // Do nothing at all. Default to empty array.
    }
  }
  
  componentDidUpdate( prevProps, prevState ) {
    console.log( 'Indecision: componentDidUpdate()' );
    
    console.log( prevState );
    console.log( this.state );
    
    // console.log( prevProps );
    // console.log( this.props );
    
    if ( prevState.options.length !== this.state.options.length ) {
      console.log( 'save data' );
      
      const json = JSON.stringify( this.state.options );
      localStorage.setItem( 'options', json );
    }
  }
  
  componentWillUnmount() {
    console.log( 'Indecision: componentWillUnmount()' );
  }
  
  handleDeleteOptions() {
    this.setState( () => ({ options: [] }) );
  }
  
  handleDeleteOption( optionToRemove ) {
    
    this.setState( ( prevState ) => ({
      options: prevState.options.filter( ( option ) => optionToRemove !== option )
    }) );
  }
  
  handlePick() {
    const randomNum = Math.floor( Math.random() * this.state.options.length );
    
    console.log( this.state.options[randomNum] );
  }
  
  handleAddOption( option ) {
    
    if ( !option ) {
      return 'Enter valid value to add item';
    }
    else if ( this.state.options.indexOf( option ) > -1 ) {
      return 'This option already exists';
    }
    
    this.setState( ( prevState ) => (
      {
        options: prevState.options.concat( option )
      }
    ) );
  }
  
  render() {
    
    return (
      <div>
        <Header
          subTitle={this.state.subTitle}
        />
        
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


IndecisionApp.defaultProps = {
  options: []
};

const Header = ( props ) => {
  
  return (
    <div>
      <h1>{props.title}</h1>
      {
        props.subTitle && <h2>{props.subTitle}</h2>
      }
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = ( props ) => {
  
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = ( props ) => {
  
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      
      {
        props.options.length === 0 && <p>Please add an option to get started</p>
      }
      
      {
        props.options.map( ( option ) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ) )
      }
    
    </div>
  );
};

const Option = ( props ) => {
  
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={( e ) => {
          props.handleDeleteOption( props.optionText );
        }}
      >
        remove
      </button>
    </div>
  );
};


class AddOption extends React.Component {
  constructor( props ) {
    super( props );
    
    this.handleAddOption = this.handleAddOption.bind( this );
    
    this.state = {
      error: undefined
    };
  }
  
  handleAddOption( event ) {
    
    event.preventDefault();
    
    const option = event.target.elements.option.value.trim();
    
    const error = this.props.handleAddOption( option );
    
    this.setState( () => ({ error }) );
    
    if ( !error ) {
      event.target.elements.option.value = '';
    }
  }
  
  render() {
    return (
      <div>
        
        {this.state.error && <p>{this.state.error}</p>}
        
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      
      </div>
    );
  }
}


/*
const User = ( props ) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
*/

ReactDOM.render( <IndecisionApp/>, document.getElementById( 'app' ) );