import React from "react";
import "./PokemonListItem.css";
import pokeball from './pokeball.png';
import arrowImg from './arrow.png';

function PokemonListItem({ pokemon, isSelected, onClick  }) {
  return (
    <div className={`pokemon-list-item ${isSelected ? "selected" : ""}`}
        onClick={onClick}>
  
      {isSelected && <span className="arrow"><img src={arrowImg} className="pokeball-icon"/></span>}
      #{pokemon.id.toString().padStart(3, '0')}
      { <img src={pokeball} alt="Pokeball Icon" className="pokeball-icon"/>}
      {pokemon.name.toUpperCase()}

    </div>
  );
}

export default PokemonListItem;
