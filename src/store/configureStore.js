import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  
  /* eslint-disable no-underscore-dangle */
  return createStore(
    combineReducers( {
                       expenses: expensesReducer,
                       filters: filtersReducer,
                       auth: authReducer
                     } ), /* preloadedState, */
    composeEnhancers( applyMiddleware( thunk ) )
  );
  /* eslint-enable */
}

