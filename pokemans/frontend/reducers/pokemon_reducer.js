import { RECEIVE_ALL_POKEMON, 
        RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { clone, merge } from 'lodash';
const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_ONE_POKEMON:
      newState = clone(state);
      newState[action.payload.pokemon.id] = action.payload.pokemon;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default pokemonReducer;
