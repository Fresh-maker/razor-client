// @flow
import React from 'react';
import { Route } from 'react-router';
import HomePage from './containers/HomePage';
import Window2Page from './containers/Window2Page';


export default (
  <Route path="/" component={HomePage}>
    <Route path="/window2/:id" component={Window2Page} />
  </Route>
);
