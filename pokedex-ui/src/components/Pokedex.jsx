import React from "react";
import PokemonList from "./PokemonList";
import RightPanel from "./RightPanel";
import "./Pokedex.css";

function Pokedex() {
  return (
    <div className="pokedex">
      <div className="left-panel">
        <PokemonList />
      </div>
      <div className="divider"></div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </div>
  );
}

export default Pokedex;