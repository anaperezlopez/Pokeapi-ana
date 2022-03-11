import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPokemonImage } from '../../services/api';
import './PokemonCard.css';

export default function PokemonCard({ name }) {
  return (
    <Link to={`/detail/${name}`}>
      <div className="PokemonCard">
        <h3>{name}</h3>
        <img src={getPokemonImage(name)} alt={name} />
      </div>
    </Link>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
};
