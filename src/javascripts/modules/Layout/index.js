import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Layout from './components/index';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
