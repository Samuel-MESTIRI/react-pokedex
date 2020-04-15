import React, { Component } from "react";
import Filter from "./Filter";
import PokemonList from "../containers/PokemonList";
import queryString from 'query-string'

class Pokemons extends Component {
  
  state = {
    value: '',
  };
  
  updateValue  = (value) => {
    this.setState({
      value: value
    });
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    if (values.search) {
      this.setState({
        value: values.search
      });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <section className='container mt-5'>
        <h1 className='h2 mb-4'>Find a pokemon</h1>
        <Filter updateValue={this.updateValue} />
        <PokemonList filterValue={value} />
      </section>
    )
  }
};

export default Pokemons;
