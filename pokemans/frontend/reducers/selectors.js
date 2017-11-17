import _ from 'lodash';

export const selectAllPokemon = (state) => (
  _.values(state.entities.pokemon)
);

export const selectOnePokemon = (state) => (
  state.entities.pokemon[state.ui.pokeDisplay]
);

export const selectItem = (state, itemId) => {
  for(let i = 0; i < state.entities.items.length; i++)
  {
    let item = state.entities.items[i];
    if(item.id === parseInt(itemId))
    {
      return item;
    }
  }
  return undefined;
};

