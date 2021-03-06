import React from 'react';
import PropTypes from 'prop-types';
import './PokemonList.css';
import PokemonCard from '../pokemon-card/PokemonCard';

export default function PokemonList({ pokemons }) {
  return (
    <div className="PokemonList">
      {!pokemons.length && (
        <h4>No existe este Pokemon</h4>
      )}
      {pokemons.map(({ name }) => (
        <PokemonCard className="PokemonList__card" key={name} name={name} />
      ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
