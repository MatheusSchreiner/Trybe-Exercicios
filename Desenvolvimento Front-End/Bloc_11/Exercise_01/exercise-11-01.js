import React from 'react';
import './style.css';
import pokemons from './pokemons';

class Exercise1101 extends React.Component {
  render() {
    return (
      <main>
        <div className='all-box'>
          <header className='header'>Pokemons</header>
          { pokemons.map(obj => { 
            return (
              <div className='pokemon-box'>
                <div className='character-list'>
                  <p>Name: { obj.name }</p>
                  <p>Type: { obj.type }</p>
                  <p>Average Weight: { obj.averageWeight.value }Kg</p>
                </div>
                <img className='image' src={ obj.image } alt={ obj.name }/>
              </div> 
            )
          })}
        </div>
      </main>
    );
  }
}

export default Exercise1101;
