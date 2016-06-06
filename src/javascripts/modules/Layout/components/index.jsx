import React, {Component, PropTypes} from 'react';
export class Layout extends Component {
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
  children: PropTypes.element,
};
