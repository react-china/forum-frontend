import React from 'react';
import Client from 'containers/app';
import createBrowserHistory from 'history/lib/createBrowserHistory';

React.render(<Client history={createBrowserHistory()}/>, document.getElementById('mount'));
