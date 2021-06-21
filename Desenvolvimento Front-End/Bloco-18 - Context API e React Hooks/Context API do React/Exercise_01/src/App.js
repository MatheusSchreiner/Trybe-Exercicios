import React from 'react';
import MyContext from './MyContext';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  };

  moveCar(car, bool) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: bool,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    return (
      <MyContext.Provider value={ {...context} }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
