class IndecisionApp extends React.Component {
  
  constructor( props ) {
    super( props );
    
    this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
    this.handlePick = this.handlePick.bind( this );
    this.handleAddOption = this.handleAddOption.bind( this );
    
    this.state = {
      title: 'Indecision',
      subTitle: 'Put your life in the hands of a computer',
      options: ['Thing one', 'Thing two', 'Thing four']
    };
  }
  
  handleDeleteOptions() {
    this.setState( () => {
      return {
        options: []
      };
    } );
  }
  
  handlePick() {
    const randomNum = Math.floor( Math.random() * this.state.options.length );
    
    console.log( this.state.options[randomNum] );
  }
  
  handleAddOption( option ) {
    console.log( 'back in app' );
    console.log( option );
    
    this.setState( ( prevState ) => {
      console.log( prevState );
      console.log( prevState.options );
      console.log( typeof prevState.options );
      
      return {
        options: prevState.options.concat( option )
      };
    } );
  }
  
  render() {
    
    return (
      <div>
        <Header
          title={this.state.title}
          subTitle={this.state.subTitle}
        />
        
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


class Header extends React.Component {
  
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}


class Action extends React.Component {
  
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}


class Options extends React.Component {
  
  render() {
    
    console.log( this.props.options );
    console.log( typeof this.props.options );
    
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map( ( option ) => <Option key={option} optionText={option}/> )
        }
      </div>
    );
  }
}


class Option extends React.Component {
  
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}


class AddOption extends React.Component {
  constructor( props ) {
    super( props );
    
    this.handleAddOption = this.handleAddOption.bind( this );
  }
  
  handleAddOption( event ) {
    
    event.preventDefault();
    
    // console.log( event );
    console.log( 'Form submitted' );
    
    const option = event.target.elements.option.value.trim();
    
    if ( option ) {
      console.log( option );
      console.log( 'in AddOption' );
      this.props.handleAddOption( option );
      
      event.target.elements.option.value = '';
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render( <IndecisionApp/>, document.getElementById( 'app' ) );