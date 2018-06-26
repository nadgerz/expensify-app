const name = 'Steve';

console.log( `${name}, app.js is running` );

const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

// 1: create a new template - JSX
// 2: root div
// 3: Render it.

const userName = 'Bibble';
const userAge = 14;
const userLocation = 'Paris';

const templateTwo = (
  <div>
    <h1>{userName.toLocaleUpperCase()}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

var appRoot = document.getElementById( 'app' );

ReactDOM.render( templateTwo, appRoot );