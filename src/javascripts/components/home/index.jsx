import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SampleActions from 'actions/sampler';

const mapStateToProps = (state) => {
  return {sampleStore: state.sample};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SampleActions, dispatch);
};

class HomeView extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {sampleStore, refresh} = this.props;

    return (
      <div className="view view-home container">
        <h1 className="text-center">{sampleStore.message}</h1>
        <div>
          <button className="btn btn-default" onClick={refresh}>refresh</button>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  sampleStore: React.PropTypes.object.isRequired,

  refresh: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
