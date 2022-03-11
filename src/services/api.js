// Ejemplo de API para recoger un listado de pokemons y listar 100
export const getPokemonList = () => window.fetch('https://pokeapi.co/api/v2/pokemon?limit=300').then((data) => data.json());

// Ejemplo de llamada para recoger la foto del pokemon
export const getPokemonImage = (name) => `https://img.pokemondb.net/artwork/large/${name}.jpg`;

// Ejemplo llamada para coger informacion del pokemon
export const getPokemon = (name) => window.fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => data.json());

export const getPokemonTypes = () => window.fetch('https://pokeapi.co/api/v2/type').then((data) => data.json());

export const getPokemonByType = (url) => window.fetch(url).then((data) => data.json());
