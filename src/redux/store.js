import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'
import combineReducers from './reducers.js';
import log from './log.js';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware, logger, log));
export default store;