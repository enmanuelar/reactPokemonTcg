import React from "react";
import { getCards } from "../../utils/Api";
import * as styles from "./Home.css";
import Board from "../Board/Board";
import PlayerHand from "../PlayerHand/PlayerHand";

class Home extends React.Component {
  state = {
    cards: []
  };
  componentDidMount() {}
  onGetCardsClick = () => {
    getCards(6, (err, { cards }) => {
      this.setState({ cards });
    });
  };
  render() {
    return (
      <div className={styles.gameContainer}>
        <button onClick={this.onGetCardsClick}>Get cards</button>
        <Board />
        <PlayerHand />
      </div>
    );
  }
}

export default Home;
