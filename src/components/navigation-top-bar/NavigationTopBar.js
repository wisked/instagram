import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationTopBar.css';
import { NavigationTopSearch } from '../navigation-top-search/NavigationTopSearch';

export class NavigationTopBar extends React.Component {
  render() {
    return (
      <header className="app__header">
        <div className="header">
          <div className="logo">
            <p>Fake <span>Instagram</span></p>
          </div>
          <NavigationTopSearch />
          <nav id="nav">
            <ul>
              <li>Sign in</li>
              <li><Link to="/signup">Sign up</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
