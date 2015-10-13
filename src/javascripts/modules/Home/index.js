import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pushState} from 'redux-router';

import reducers from './reducers/index';

import Home from './components/index';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({pushState}, dispatch);
}

export default {
  reducers,
  Home: connect(mapStateToProps, mapDispatchToProps)(Home),
};
