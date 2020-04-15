import React, { Component } from "react";
import Item from "../components/Item";

class PokemonList extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=964')
    .then(response => response.json())
    .then(data => {
      console.log(data) 
      this.setState({
        pokemons: data.results
      });
    })
    .catch(error => console.error(error))
  }

 



  render() {
    const fileredPokemon = this.props.filterValue 
      ? this.state.pokemons.filter(el => el.name.includes(this.props.filterValue))
      : this.state.pokemons

    return (
      <div className='d-flex flex-wrap'>
        {
          this.state.pokemons ? 
          fileredPokemon.map(el => {
              const id = el.url.split('/')[6]
              return <Item key={id} {...el} id={id} />  
            })
          : <div>Loading</div>
        }
      </div>
    )
  }
}

export default PokemonList;
