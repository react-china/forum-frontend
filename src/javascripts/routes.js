import React from 'react';
import {Route} from 'react-router';

import {Layout, Home, About} from './modules/index';

export default (store) => {
  return (
    <Route component={Layout}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  );
};
