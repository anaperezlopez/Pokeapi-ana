import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonTypes, getPokemonByType } from './services/api';
import './App.css';
import SearchBox from './components/search-box/SearchBox';
import PokemonList from './components/pokemon-list/PokemonList';

export default function App() {
  // useState es un hook de React para guardar información
  // en este caso es la lista de pokemons que devuelve el API
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [types, setTypes] = useState([]);

  const getByType = (url) => {
    getPokemonByType(url).then((response) => {
      setPokemonList(response.pokemon.map((item) => item.pokemon));
    });
  };

  const clearFilter = () => {
    getPokemonList().then((response) => {
      setPokemonList(response.results);
    });
  };
  // useEffect es un hook de React para hacer operaciones antes de renderizar el componente
  useEffect(() => {
    getPokemonList().then((response) => {
      setPokemonList(response.results);
    });
  }, []);

  useEffect(() => {
    getPokemonTypes().then((response) => setTypes(response.results));
  }, []);

  const filteredPokemons = pokemonList && pokemonList.filter((pokemon) => {
    const pokemonNameLowercase = pokemon.name.toLowerCase();
    return pokemonNameLowercase.includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <SearchBox
        placeholder="Buscar Pokemon"
        onSearchChange={(event) => setSearch(event.target.value)}
        clearList={() => {
          clearFilter();
          setSearch('');
        }}
        searchValue={search}
      />

      <div className="App__buttonType">
        {types && types.map((type) => (
          <button className={`App__buttonType--${type.name}`} type="button" key={type.name} onClick={() => getByType(type.url)}>{type.name}</button>))}
      </div>

      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}
