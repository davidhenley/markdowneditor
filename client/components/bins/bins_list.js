import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
  onBinRemove(bin) {
    Meteor.call('bins.remove', bin);
  }

  renderList() {
    return this.props.bins.map(bin => (
      <li className="list-group-item" key={bin._id}>
        <Link to={`/bins/${bin._id}`}>Bin {bin._id}</Link>
        <span className="pull-right">
          <button
            onClick={() => this.onBinRemove(bin)}
            className="btn btn-danger">
            Remove
          </button>
        </span>
      </li>
    ));
  }

  render() {
    return (
      <ul className="list-group bins-list">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  return { bins: Bins.find({}).fetch() };
}, BinsList);
