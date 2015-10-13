import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import reducers from './reducers/index';
import Layout from './components/index';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default {
  reducers,
  Layout: connect(mapStateToProps, mapDispatchToProps)(Layout),
};
