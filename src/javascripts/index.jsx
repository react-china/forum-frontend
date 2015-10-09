import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';

import {createStore} from './utils/index';
import createRoutes from './routes';

import * as modules from './modules/index';

const store = createStore(modules.Reducers, {});
const routes = createRoutes(store);

let component = (
  <Provider store={store} key="provider">
    <ReduxRouter routes={routes}/>
  </Provider>
);

if (__DEBUG__) {
  const {DevTools, LogMonitor, DebugPanel} = require('redux-devtools/lib/react');
  component = (
    <div>
      {component}
      <DebugPanel top right bottom key="debugPanel">
        <DevTools store={store} monitor={LogMonitor}/>
      </DebugPanel>
    </div>
  );
}

const target = document.getElementById('mount');
ReactDOM.render(component, target);
