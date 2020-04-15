import React, { Component } from "react";

class PokemonDetail extends Component {
  state = {
    pokemon: null
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.pokemon)
    .then(response => response.json())
    .then(data => {
      console.log(data) 
      this.setState({
        pokemon: data
      });
    })
    .catch(error => console.error(error))
  }

  render() {
    if (!this.state.pokemon) return (<div className='container'>Loading...</div>)
    return (
      <section className='container pokemon-detail'>
        <div className='row'>
          <div className='col-6'>
            <img className='m-2 mr-4 float-left' src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.species.name} width='150px' />
            <h2 className='mt-4 mb-3'>{this.state.pokemon.forms[0].name}</h2>
            <div>Height: {this.state.pokemon.height}</div>
            <div>Weight: {this.state.pokemon.weight}</div>
            <div className='clearfix'></div>

            <div className='d-flex ml-3 mb-3'>
              {this.state.pokemon.types.map((el, i) => {
                return <span key={i} className={"badge badge-primary p-2 m-1 " + el.type.name}>{el.type.name}</span>
              })}
            </div>

            <div className='d-flex align-items-center ml-3 mb-3'>
              <span className='mr-2'>Abilities :</span>
              <div className='ability rounded mr-3 p-2'>{this.state.pokemon.moves[0].move.name}</div>
              <div className='ability rounded mr-3 p-2'>{this.state.pokemon.moves[1].move.name}</div>
              <div className='ability rounded mr-3 p-2'>{this.state.pokemon.moves[2].move.name}</div>
            </div>
          </div>
          <div className='col-6'>
              <h3 className='h5 mt-5 pt-3'>Stats :</h3>
              <div className='ml-3'>
                {this.state.pokemon.stats.map((el, i) => {
                  return <div key={i}>{el.stat.name} : {el.base_stat}</div>
                })}
              </div>
          </div>
        </div>
      </section> 
      
    )
  }
}

export default PokemonDetail;
