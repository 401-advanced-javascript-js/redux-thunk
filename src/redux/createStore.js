// Store

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from '../middleware/thunk-middleware';
import peopleReducer from './people-reducer';
import personReducer from './person-reducer';

const reducer = combineReducers({
  people: peopleReducer,
  person: personReducer,
});

export default () => createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
