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
  
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}


class Options extends React.Component {
  
  render() {
    
    const numOptions = this.props.options.length;
    
    return (
      <div>
        Options component here
        {
          this.props.options.map( ( option ) => {
            return (
              <p key={option}>{option}</p>
            );
          } )
        }
      </div>
    );
  }
}


class Option extends React.Component {
  
  render() {
    return (
      <div>
        Option component here
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