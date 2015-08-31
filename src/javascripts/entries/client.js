import React from 'react';
import Client from 'containers/app';
import { history } from 'react-router/lib/BrowserHistory';

React.render(<Client history={history}/>, document.getElementById('mount'));
