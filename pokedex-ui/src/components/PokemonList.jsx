import React, { useState }  from "react";
import PokemonListItem from "./PokemonListItem";
import "./PokemonList.css";

function PokemonList() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Dummy static data for now
  const pokemons = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venusaur" },
    { id: 4, name: "Charmander" },
    { id: 5, name: "Charmeleon" },
    { id: 6, name: "Charizard" },
    { id: 7, name: "Squirtle" },
  ];

  return (
    <div className="pokemon-list">
      <div className="list-header">CONTENTS</div>
      {pokemons.map((pokemon, index) => (
        <PokemonListItem
          key={pokemon.id}
          pokemon={pokemon}
          isSelected={index === selectedIndex}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
}

export default PokemonList;
