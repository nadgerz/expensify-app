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
  
  handleRemoveAll() {
    console.log( 'remove all' );
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
  
  render() {
    return (
      <div>
        AddOptions component here
      </div>
    );
  }
}


ReactDOM.render( <IndecisionApp/>, document.getElementById( 'app' ) );