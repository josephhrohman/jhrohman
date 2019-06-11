import React from 'react';
import Landing from '../components/layout/landing/landing';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path='/' render={ () => <Landing />} />
  </Switch>
);

export default Routes;
