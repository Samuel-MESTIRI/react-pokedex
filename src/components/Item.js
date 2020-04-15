import React from "react";
import { useHistory } from "react-router-dom";

const Item = ({ name, id }) => {
  let history = useHistory();

  function handleClick() {
    history.push("/"+name);
  }

  return (
    <div className='item m-1 bg-white' onClick={handleClick}>
      <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'} alt={name} />
      <div className='text-center'>{name}</div>
    </div>
  )
};

export default Item;
