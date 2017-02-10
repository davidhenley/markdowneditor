import React from 'react';

import Header from './header';
import BinsList from './bins/bins_list';

export default (props) => {
  return (
    <div className="app">
      <Header />
      <BinsList />
      {props.children}
    </div>
  );
}
