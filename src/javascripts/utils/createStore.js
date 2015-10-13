import {compose, applyMiddleware, combineReducers, createStore as _createStore} from 'redux';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import {reducer as form} from 'redux-form';
import {reduxReactRouter, routerStateReducer as router} from 'redux-router';

const logger = createLogger();
const middleware = [thunk, promise];

if (__DEV__) {
  middleware.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middleware);

const composes = [createStoreWithMiddleware];
if (__DEBUG__) {
  const {devTools, persistState} = require('redux-devtools');
  composes.push(devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)));
}

let buildStore = compose(...composes)(_createStore);
buildStore = reduxReactRouter({createHistory: createBrowserHistory})(buildStore);

export default function createStore(reducers, initialState = {}) {
  return buildStore(combineReducers({store: reducers, form, router}), initialState);
}
