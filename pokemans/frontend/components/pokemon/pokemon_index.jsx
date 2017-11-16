import React from 'react';
class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return (
      <ul>
        {this.props.pokemon.map(pokemon =>
          <li>
            {pokemon.name}
            <img className='pokemon-icon' src={pokemon.image_url}></img>
          </li>)}
      </ul>
    );
  }
  componentDidMount() {
    this.props.requestAllPokemon();
    console.log(this.props);
  }
}

export default PokemonIndex;
