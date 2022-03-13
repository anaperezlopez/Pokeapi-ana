import React from 'react';
import logo from '../../assets/pokeball.png';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="logo" />
    </header>
  );
}
