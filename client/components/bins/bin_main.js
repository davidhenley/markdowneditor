import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../imports/collections/bins';

class BinMain extends Component {
  render() {
    console.log(this.props.bin);
    return (
      <div className="bin-main">
        Bin Main {this.props.params.binId}
      </div>
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  return { bin: Bins.findOne(binId) };
}, BinMain);
