import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Layout as component} from './components/index';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export const reducers = require('./reducers/index').default;
export const view = connect(mapStateToProps, mapDispatchToProps)(component);
