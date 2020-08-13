import React from 'react';
import './Nav.css';

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav className="nav">
      <div className="item">
        <div className="item-square"></div>
        <a>Profile</a>
      </div>
      <div className="item">
        <div className="item-square"></div>
        <a>Messages</a>
      </div>
      <div className="item">
        <div className="item-square"></div>
        <a>News</a>
      </div>
      <div className="item">
        <div className="item-square"></div>
        <a>Music</a>
      </div>
      <div className="item">
        <div className="item-square"></div>
        <a>Settings</a>
      </div>
    </nav>
  )
}

export default Nav;