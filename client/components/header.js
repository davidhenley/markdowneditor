import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand">Markdown Editor</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a>Sign Up</a>
            </li>
            <li>
              <a>Create Bin</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
