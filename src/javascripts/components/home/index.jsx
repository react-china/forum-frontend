import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {sampleStore: state.sample};
};

class HomeView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='view view--home container'>
        <h1 className='text-center'>{this.props.sampleStore.message}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);
