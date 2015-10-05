import {compose, applyMiddleware, combineReducers, createStore as _createStore} from 'redux';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import thunk from 'redux-thunk';
import promise from 'redux-promise';

import {reducer as form} from 'redux-form';
import {reduxReactRouter, routerStateReducer as router} from 'redux-router';

const middleware = [thunk, promise];
const createStoreWithMiddleware = applyMiddleware(...middleware);

const composes = [createStoreWithMiddleware];
if (__DEBUG__) {
  const {devTools, persistState} = require('redux-devtools');
  composes.push(devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)));
}

let buildStore = compose(...composes)(_createStore);
buildStore = reduxReactRouter({createHistory: createBrowserHistory})(buildStore);

const reducers = combineReducers({form, router});

export default function createStore(initialState = {}) {
  return buildStore(reducers, initialState);
}
