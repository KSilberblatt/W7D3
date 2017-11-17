import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';
import { Route } from 'react-router';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="pokemon-big">
        {this.props.pokemon && this.props.pokemon.poke_type ? (
          <div key={this.props.pokemon.name}>
            <p>{this.props.pokemon.name}</p>
            <p>{this.props.pokemon.poke_type}</p>
            <img src={this.props.pokemon.image_url} alt=""/>
            <p>{this.props.pokemon.attack}</p>
            <p>{this.props.pokemon.defense}</p>
            {this.props.pokemon.moves.map(move => (
              <p key = {move} >{move}</p>
            ))}
            <ul className ="items">
              {this.props.items.map(item => (
                <li key = {item.name} >{
                  <Link to={`/pokemon/${this.props.pokemon.id}/item/${item.id}`} >
                    <img src={item.image_url} alt=""/>
                  </Link>
                }</li>
              ))}
            </ul>
            <Route path="/pokemon/:id/item/:itemId" component={ItemDetailContainer} />
          </div>
        ):""}
      </div>
    );
  }

  componentWillReceiveProps(newProps)
  {
    if(newProps.match.params.id != this.props.match.params.id)
    {
      this.props.requestOnePokemon(newProps.match.params.id);
    }
  }

  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.id);
  }
}

export default PokemonDetail;