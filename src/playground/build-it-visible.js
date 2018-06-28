console.clear();


class ToggleVisibility extends React.Component {
  constructor( props ) {
    super( props );
    
    this.handleToggle = this.handleToggle.bind( this );
    
    this.state = {
      visible: false
    };
  }
  
  handleToggle() {
    this.setState( ( prevState ) => ({ visible: !prevState.visible }) );
  }
  
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        
        <button onClick={this.handleToggle}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        
        {
          this.state.visible && (
            <div>
              <p>Big Boobs!</p>
            </div>
          )
        }
      </div>
    );
  }
}


ReactDOM.render( <ToggleVisibility/>, document.getElementById( 'app' ) );

//
// const defaultButtonText = 'Show';
//
// const app = {
//   visible: false,
//   buttonText: defaultButtonText
// };
//
// const toggleDetails = () => {
//   app.visible = !app.visible;
//
//   app.buttonText = defaultButtonText;
//
//   if ( app.visible ) {
//     app.buttonText = 'Hide';
//   }
//
//   renderApp();
// };
//
// const appRoot = document.getElementById( 'app' );
//
// const renderApp = () => {
//
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>{app.buttonText} Details</button>
//       {app.visible && <p>Big Boobs!</p>}
//     </div>
//   );
//
//   ReactDOM.render( template, appRoot );
// };
//
// renderApp();
