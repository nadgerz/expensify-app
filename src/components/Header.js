import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expensify</h1>
    
    <NavLink to="/" activeClassName={'is-active'} exact={true}>Login</NavLink>
    <NavLink to="/dashboard" activeClassName={'is-active'}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName={'is-active'}>Create</NavLink>
    <NavLink to="/help" activeClassName={'is-active'}>Help</NavLink>
    {/*<NavLink to="/404" activeClassName={'is-active'}>404</NavLink>*/}
  
  </header>
);

export default Header;