import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SampleActions from 'actions/sampler';

const mapStateToProps = (state) => {
  return {store: state.sample};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SampleActions, dispatch);
};

class HomeView extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {store, refresh, refreshAsync} = this.props;

    return (
      <div className="view view-home container">
        <h1 className="text-center">{store.message}</h1>
        <div>
          {' '}
          <button className="btn btn-default" onClick={refresh}>Refresh</button>
          {' '}
          <button className="btn btn-primary" onClick={refreshAsync}>Refresh Async</button>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  store: React.PropTypes.object.isRequired,

  refresh: React.PropTypes.func.isRequired,
  refreshAsync: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
