import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import PokemonDetail from './containers/pokemon-detail'
import Pokemons from './containers/Pokemons'

function App() {
  return (
    <>
      <div className='rounded-circle circle m-4'>
        <div className='bg-primary rounded-circle position-absolute'></div>
      </div>
      <Switch>
        <Route exact path='/' component={Pokemons} />
        <Route path='/:pokemon' component={PokemonDetail} />
      </Switch>
    </>
  );
}

export default App;
