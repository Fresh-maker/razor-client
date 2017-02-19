// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Window1Page from './containers/Window1Page';
import Window2Page from './containers/Window2Page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/window1" component={Window1Page} />
    <Route path="/window2/:id" component={Window2Page} />
  </Route>
);
