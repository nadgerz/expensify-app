const obj = {
  name: 'Bob',
  getName() {
    return this.name;
  }
};

const func = function() {
  console.log( this );
};

func();

const getName = obj.getName;

console.log( getName() );
console.log( obj.getName() );


class IndecisionApp extends React.Component {
  
  render() {
    
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    
    const options = ['Thing one', 'Thing two', 'Thing four'];
    
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        
        <Action/>
        
        <Options options={options}/>
        
        <AddOption/>
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
  
  handlePick() {
    console.log( 'handlepick' );
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}


class Options extends React.Component {
  constructor() {
    super();
  }
  
  handleRemoveAll() {
    console.log( 'remove all' );
    console.log( this.props );
  }
  
  render() {
    
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remova All</button>
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
  
  handleAddOption( event ) {
    
    event.preventDefault();
    
    // console.log( event );
    console.log( 'Form submitted' );
    
    const option = event.target.elements.option.value.trim();
    
    if ( option ) {
      console.log( option );
      
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