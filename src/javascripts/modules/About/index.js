import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {enableDeveloperMode} from './actions/index';
import {About as component} from './components/index';

function mapStateToProps(state) {
  return {store: state.store.about};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({enableDeveloperMode}, dispatch);
}

export const reducers = require('./reducers/index').default;
export const route = {
  path: 'about',
  getComponent(location, callback) {
    require.ensure([], () => {
      callback(null, connect(mapStateToProps, mapDispatchToProps)(component));
    });
  },
};
