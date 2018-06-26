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

const userName = 'Babble';
const userAge = 14;
const userLocation = 'Paris';

const user = {
  name: userName,
  age: userAge,
  location: userLocation
};

const templateTwo = (
  <div>
    <h1>{user.name.toLocaleUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById( 'app' );

ReactDOM.render( templateTwo, appRoot );