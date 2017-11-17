import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const uiReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      newState = { pokeDisplay: action.payload.pokemon.id };
      return newState;
    default:
      return state;
  }
};

export default uiReducer;