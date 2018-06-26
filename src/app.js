const name = 'Steve';

console.log( `${name}, app.js is running` );

const app = {
  title: 'My Big App',
  subTitle: 'This is more info'
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
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

ReactDOM.render( template, appRoot );