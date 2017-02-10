import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Bins } from '../imports/collections/bins';

import routes from './routes';

Meteor.startup(() => {
  render(
    <Router routes={routes} history={browserHistory} />,
    document.querySelector('#root')
  );
});
