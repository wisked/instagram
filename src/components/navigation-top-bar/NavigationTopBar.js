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
          <nav className="navigation-container">
            <ul className="navigation-links">
              <li><Link to="/signin">Sign in</Link> </li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/top-posts">Top post</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
