import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const GamePlayContext = createContext();

export const GamePlayProvider = props => {
  const [gamePlay, setGamePlay] = useState([
    {
      cards: [],
      data: {}
    }
  ]);
  return (
    <GamePlayContext.Provider value={[gamePlay, setGamePlay]}>
      {props.children}
    </GamePlayContext.Provider>
  );
};

GamePlayProvider.propTypes = { children: PropTypes.node.isRequired };
