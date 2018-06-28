class Header extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Indecison</h1>
        <h2>Put your life in the hands of a computer</h2>
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
    return (
      <div>
        <p1>Options component here</p1>
      </div>
    );
  }
}


class AddOption extends React.Component {
  
  render() {
    return (
      <div>
        <p1>AddOptions component here</p1>
      </div>
    );
  }
}


const jsx = (
  <div>
    
    <Header/>
    
    <Action/>
    
    <Options/>
    
    <AddOption/>
  
  </div>
);

ReactDOM.render( jsx, document.getElementById( 'app' ) );