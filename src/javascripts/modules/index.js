import {combineReducers} from 'redux';

import {Layout, reducers as layoutReducers} from './Layout/index';
import {Home, reducers as homeReducers} from './Home/index';
import {About, reducers as aboutReducers} from './About/index';

export default {
  Views: {Layout, Home, About},
  Reducers: combineReducers({
    layout: layoutReducers,
    home: homeReducers,
    about: aboutReducers,
  }),
};
