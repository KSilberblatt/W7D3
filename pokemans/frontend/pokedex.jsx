import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import configureStore from './store/store';
import { requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();
  window.store = store;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store = {store} />, rootEl);
});
