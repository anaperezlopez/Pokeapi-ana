import React from 'react';
import logo from '../../assets/pikachu.png';
import './PokemonNotFound.css';

export default function PokemonNotFound() {
  return (
    <div className="notFound">
      <h1>Pokemon no encontrado</h1>
      <img src={logo} className="notFound__logo" alt="pikachu" />
    </div>
  );
}
