import React, { Component } from 'react';

class BinMain extends Component {
  render() {
    return (
      <div className="bin-main">
        Bin Main {this.props.params.binId}
      </div>
    );
  }
}

export default BinMain;
