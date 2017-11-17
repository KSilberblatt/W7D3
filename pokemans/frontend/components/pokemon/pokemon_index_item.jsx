import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props)
  {
    super(props);
    this.pokemon = props.pokemon;
  }


  render() 
  {
    return (
      <li>
        <Link to = {`/pokemon/${this.pokemon.id}`}>
          {this.pokemon.name}
          <img className='pokemon-icon' src={this.pokemon.image_url}></img>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;