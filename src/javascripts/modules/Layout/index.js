import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export const reducers = require('./reducers/index');
export const view = connect(mapStateToProps, mapDispatchToProps)(require('./components/index'));
