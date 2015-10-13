import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import reducers from './reducers/index';

import About from './components/index';
import {enableDeveloperMode} from './actions/index';

function mapStateToProps(state) {
  return {store: state.store.about};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({enableDeveloperMode}, dispatch);
}

export default {
  reducers,
  About: connect(mapStateToProps, mapDispatchToProps)(About),
};
