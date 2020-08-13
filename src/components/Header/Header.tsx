import React from 'react';
import './Header.css';
import Logo from '../../assets/img/logo.png'

const Header: React.FC = (): JSX.Element => {

  return (
    <header className="header">
      <div className="wrapper">
        <img src={Logo} alt="logo"/>
      </div>
    </header>
  )
}

export default Header;