import React, { useContext } from "react";
import { getCards, getMockData } from "../../utils/Api";
import * as styles from "./Home.css";
import Board from "../Board/Board";
import PlayerHand from "../PlayerHand/PlayerHand";
import { GamePlayContext } from "../../context/GamePlayContext";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [gamePlay, setGamePlay] = useContext(GamePlayContext);

  // eslint-disable-next-line no-unused-vars
  const onGetCardsClick = () => {
    getCards(6, (err, { cards }) => {
      this.setState({ cards });
    });
  };

  const onGetMockData = () => {
    getMockData((err, { data }) => {
      setGamePlay(() => {
        return { ...data };
      });
    });
  };

  return (
    <div className={styles.gameContainer}>
      <button onClick={onGetMockData}>Get mock data</button>
      <Board />
      <PlayerHand />
    </div>
  );
};

export default Home;
