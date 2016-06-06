import {combineReducers} from 'redux';

import * as layout from './Layout/index';
import * as home from './Home/index';
import * as about from './About/index';

export const Views = {
  Layout: layout.view,
  Home: home.view,
};

export const Routes = {
  About: about.route,
};

export const Reducers = combineReducers({
  layout: layout.reducers,
  home: home.reducers,
  about: about.reducers,
});
