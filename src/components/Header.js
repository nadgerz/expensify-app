import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';


export const Header = ( { startLogout } ) => {
  
  const isActiveClassName = 'activeClassName={\'is-active\'}';
  // console.log( isActiveClassName );
  
  return (
    <header>
      
      <h1>Expensify</h1>
      
      <NavLink to="/" activeClassName={'is-active'} exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName={'is-active'}>Create</NavLink>
      <NavLink to="/help" activeClassName={'is-active'}>Help</NavLink>
      {/*<NavLink to="/404" activeClassName={'is-active'}>404</NavLink>*/}
      
      <button onClick={startLogout}>Logout</button>
    
    </header>
  );
};

const mapDispatchToProps = ( dispatch ) => ({
  startLogout: () => dispatch( startLogout() )
});

export default connect( undefined, mapDispatchToProps )( Header );
