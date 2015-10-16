import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {enableDeveloperMode} from './actions/index';

function mapStateToProps(state) {
  return {store: state.store.about};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({enableDeveloperMode}, dispatch);
}

export const reducers = require('./reducers/index');
export const route = {
  path: 'about',
  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, connect(mapStateToProps, mapDispatchToProps)(require('./components/index')));
    });
  },
};
