const name = 'Steve';

console.log( `${name}, app.js is running` );

const app = {
  title: 'My Big App',
  subTitle: 'This is more info',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <h3>{(app.options && app.options.length > 0) ? 'Here are your options:'.toLocaleUpperCase() : 'No soup for you!'}</h3>
    
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const userName = 'Babble';
const userAge = 124;
const userLocation = 'Paris';

// const user = {
//   name: userName,
//   age: userAge,
//   location: userLocation
// };

const user = {};

function getLocation( location ) {
  if ( location ) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name.toLocaleUpperCase() : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation( user.location )}
  </div>
);

const appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );