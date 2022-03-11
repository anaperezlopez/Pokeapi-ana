import React from 'react';
import logo from '../../assets/pokeball.png';
import './Header.css';

export default function Header() {
  return (
    <header className="Header App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}
