import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import { selectOnePokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    pokemon: selectOnePokemon(state),
    items: state.entities.items
  };
};

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));