import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BinsList from './components/bins/bins_list';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BinsList} />
  </Route>
);
