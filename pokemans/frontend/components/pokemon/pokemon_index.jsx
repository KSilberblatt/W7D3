import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        <ul className="pokemon-small">
          {this.props.pokemon.map(pokemon =>
            <PokemonIndexItem key = {pokemon.image_url} pokemon = {pokemon} /> 
          )}
        </ul>
        <Route path='/pokemon/:id' component={PokemonDetailContainer}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
