import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Home as component} from './components/index';

import {pushState} from 'redux-router';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({pushState}, dispatch);
}

export const reducers = require('./reducers/index').default;
export const view = connect(mapStateToProps, mapDispatchToProps)(component);
