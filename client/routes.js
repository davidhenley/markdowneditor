import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BinsList from './components/bins/bins_list';
import BinMain from './components/bins/bin_main';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BinsList} />
    <Route path="bins/:binId" component={BinMain} />
  </Route>
);
