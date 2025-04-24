import React, { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data));
  }, []);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}> {'No:' + pokemon.dexNumber} {pokemon.name} ({pokemon.types.join("/")})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
