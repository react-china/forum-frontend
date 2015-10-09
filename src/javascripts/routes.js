import React from 'react';
import {Route} from 'react-router';

import * as modules from './modules/index';

export default (store) => {
  const {Views: {Layout, Home, About}} = modules;
  return (
    <Route component={Layout}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  );
};
