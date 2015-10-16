import {combineReducers} from 'redux';

import * as layout from './Layout/index';
import * as home from './Home/index';
import * as about from './About/index';

export default {
  Views: {
    Layout: layout.view,
    Home: home.view,
  },
  Routes: {
    About: about.route,
  },
  Reducers: combineReducers({
    layout: layout.reducers,
    home: home.reducers,
    about: about.reducers,
  }),
};
