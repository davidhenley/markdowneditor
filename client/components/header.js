import React, { Component } from 'react';
import { Link } from 'react-router';
import Accounts from './accounts';

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    Meteor.call('bins.insert');
  }

  render() {
    return (
      <div className="header">
        <nav className="nav navbar-default">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Markdown Editor</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
            <li>
              <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
