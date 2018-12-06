import React from 'react';
import { connect } from 'react-redux';
import Img from 'react-image';

let something = {back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", back_female: null, back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png", back_shiny_female: null, front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
}

const Profile = props => {
  const { pokemon } = props;    
  console.log(pokemon);
  const url = pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : null;  
  const abil = pokemon.abilities ? pokemon.abilities : [];
  console.log(abil);
  return (
    <div className="full-page">
      <div className = 'container pokemon-container'>        
        <div className="poke-header">    
          <span className = 'poke-name'>{pokemon.name}</span>
          <span className = 'poke-number'>{pokemon.base_experience}</span>
        </div>
        <div className="poke-image">
          <div className="poke-image-container">
            <Img src = {url}/>
          </div>
        </div>
        <div className="poke-info">
          <div className="poke-info-header">
            <span><i>Height: {pokemon.height} Weight: {pokemon.weight}</i>
            </span>
          </div>
          <div className="poke-info-body">
            <div className="poke-info-body-header">
              Pokémon Abilities
            </div>
            <div className="poke-info-body-info">
              {abil.map((name, i) => {
                const tag = name.ability && name.ability.name ? name.ability.name : null;
                console.log(tag);
                return (
                  <div key = {i}>{tag}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(store) {
  return {    
    pokemon: store.homeForm.pokemon
  }
}

export default connect(mapStateToProps)(Profile);
