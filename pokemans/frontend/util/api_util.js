import {receiveAllPokemon} from '../actions/pokemon_actions';

class APIUtil {

  static fetchAllPokemon() {
    return $.ajax({
      method: "GET",
      url: "api/pokemon"
    });
  }

  static fetchSinglePokemon(id) {
    return $.ajax({
      method: "GET",
      url: `api/pokemon/${id}`
    });
  }
}

export default APIUtil;
