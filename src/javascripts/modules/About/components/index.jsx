import React, {Component, PropTypes} from 'react';
export default class About extends Component {
  render() {
    const {store, enableDeveloperMode} = this.props;
    const {count, hint} = store.toJS();

    const divHint = count > 4 ? <div className="well text-center">{hint}</div> : null;
    return (
      <div onClick={enableDeveloperMode}>
        <h1 className="text-center">About</h1>
        <h5 className="text-center">click 5 times, and become a react developer!</h5>
        {divHint}
      </div>
    );
  }
}

About.propTypes = {
  store: PropTypes.object.isRequired,
  enableDeveloperMode: PropTypes.func.isRequired,
};
