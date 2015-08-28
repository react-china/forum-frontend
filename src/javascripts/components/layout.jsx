import React from 'react';

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page-container">
        <div className="view-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
};
