import React from "react";
import * as styles from "./WithdrawArea.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

class Deck extends React.Component {
  render() {
    return (
      <div className={styles.deckZone}>
        <div className={styles.deckCardsContainer}>
          {this.props.deckData && <Card cardData={this.props.deckData[0]} />}
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  deckData: PropTypes.array
};

export default Deck;
