import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemon, getPokemonImage, getPokemonList } from '../../services/api';
import PokemonNotFound from '../pokemon-not-found/PokemonNotFound';
import './Detail.css';

export default function Detail() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({});

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemon(name).then((response) => setPokemon(response));
  }, [name]);

  useEffect(() => {
    getPokemonList().then((response) => setPokemonList(response.results));
  }, []);

  const { abilities, types, weight } = pokemon;

  const abilitiesString = abilities && abilities.map((ability) => ability.ability.name).join(', ');

  const typesString = types && types.map((type) => type.type.name).join(', ');

  return (
    <div>
      {!pokemonList.some((p) => p.name === name)
        ? <PokemonNotFound />
        : (
          <div className="Detail">
            <table>
              <thead>
                <tr><th colSpan="2"><h2>{name}</h2></th></tr>
              </thead>
              <tbody>
                <tr><td rowSpan="4" className="fotopoke"><img src={getPokemonImage(name)} alt={name} /></td></tr>
                <tr>
                  <td>
                    <b>Peso: </b>
                    {weight}
                    kg
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Habilidades: </b>
                    {abilitiesString}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Tipo: </b>
                    {typesString}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
    </div>
  );
}
