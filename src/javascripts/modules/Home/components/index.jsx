import React, {Component, PropTypes} from 'react';
export default class Home extends Component {
  _handlePushState(event) {
    event.preventDefault();

    const {pushState} = this.props;
    pushState(null, '/about');
  }

  render() {
    return (
      <div className="view view-home container">
        <h1 className="text-center">Welcome to React-China</h1>
        <button className="btn btn-default" onClick={(event) => this._handlePushState(event)}>About</button>
      </div>
    );
  }
}

Home.propTypes = {
  pushState: PropTypes.func.isRequired,
};
