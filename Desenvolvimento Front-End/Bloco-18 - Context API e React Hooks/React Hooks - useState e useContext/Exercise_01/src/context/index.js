import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

function CarsProvider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side
    });
  };

 const contextValue = { cars, moveCar };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

CarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, CarsProvider as Provider };
