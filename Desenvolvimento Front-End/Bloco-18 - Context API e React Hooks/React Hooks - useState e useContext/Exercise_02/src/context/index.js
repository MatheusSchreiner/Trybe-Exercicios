import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

function CarsProvider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, setSignal] = useState({
    color: 'red',
  });

  const moveCar = (car, side) => {
   setCars({
        ...cars,
        [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
        color: signalColor,
    });
  };

  const contextValue = {
    cars,
    moveCar,
    signal,
    changeSignal,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}


CarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, CarsProvider as Provider };
