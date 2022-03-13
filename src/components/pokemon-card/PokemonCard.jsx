import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPokemonImage } from '../../services/api';
import './PokemonCard.css';

export default function PokemonCard({ className, name }) {
  return (
    <Link to={`/detail/${name}`}>
      <div className={className}>
        <h3>{name}</h3>
        <img src={getPokemonImage(name)} alt={name} />
      </div>
    </Link>
  );
}

PokemonCard.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
