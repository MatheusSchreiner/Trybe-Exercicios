import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

function GameBoard({ gameState, updateGame }) {
  return (
    <div className="game-board">
      {gameState.map((playerId, i) => (
        <GameCell id={i} key={i} onClick={() => updateGame(i)} content={playerId} />
      ))}
    </div>
  );
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateGame: PropTypes.func.isRequired,
};

export default GameBoard;
