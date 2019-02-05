import {createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const composedEnhancer = compose(applyMiddleware(thunk));

const initStore = () => createStore(
  rootReducer,
  composedEnhancer
);

module.exports = {
  initStore
};