import React from 'react';
import pokemons from '../../pokemons';

class Exercise1201 extends React.Component {
  render() {
    return (
      <div>
        {console.log(pokemons)}
        { pokemons.map((value, index) => <img key={ index } src={ value.image } /> ) }
      </div>
    );
  }
}

export default Exercise1201;
