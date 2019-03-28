import React from "react";
import { getCards, getMockData } from "../../utils/Api";
import * as styles from "./Home.css";
import Board from "../Board/Board";
import PlayerHand from "../PlayerHand/PlayerHand";

class Home extends React.Component {
  state = {
    cards: [],
    data: {}
  };
  componentDidMount() {}
  onGetCardsClick = () => {
    getCards(6, (err, { cards }) => {
      this.setState({ cards });
    });
  };
  onGetMockData = () => {
    getMockData((err, { data }) => {
      this.setState({ data });
    });
  };
  render() {
    return (
      <div className={styles.gameContainer}>
        <button onClick={this.onGetMockData}>Get mock data</button>
        <Board
          deckData={this.state.data.deckData}
          graveyardData={this.state.data.graveyardData}
          bench={this.state.data.bench}
          prizes={this.state.data.prizes}
          battleCards={this.state.data.battleCards}
        />
        <PlayerHand playerHandCards={this.state.data.hand} />
      </div>
    );
  }
}

export default Home;
