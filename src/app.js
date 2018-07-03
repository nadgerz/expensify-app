import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is my edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is the help component
  </div>
);

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
    <Link to="/404">404</Link>
  
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      
      <Header/>
      
      <Switch>
        <Route
          path={'/'}
          component={ExpenseDashboardPage}
          exact={true}
        />
        <Route
          path={'/create'}
          component={AddExpensePage}
        />
        <Route
          path={'/edit'}
          component={EditExpensePage}
        />
        <Route
          path={'/help'}
          component={HelpPage}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    
    </div>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById( 'app' ) );