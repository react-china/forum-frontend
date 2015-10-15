import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {pushState} from 'redux-router';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({pushState}, dispatch);
}

export const reducers = require('./reducers/index');
export const view = connect(mapStateToProps, mapDispatchToProps)(require('./components/index'));
