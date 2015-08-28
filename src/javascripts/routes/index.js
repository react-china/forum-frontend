import { Route } from 'react-router';
import React from 'react';
import Layout from '../components/layout';
import HomeView from '../components/home/index';

export default (
  <Route component={ Layout }>
    <Route name="home" path="/" component={ HomeView }/>
  </Route>
);
