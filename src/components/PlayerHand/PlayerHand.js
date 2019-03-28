import React from "react";
import * as styles from "./PlayerHand.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

class PlayerHand extends React.Component {
  render() {
    const setCardsList = card => {
      return (
        <li key={card.id}>
          <Card
            cardData={card}
            customClass={`${styles.widthAuto} ${styles.zoomInOnHover}`}
          />
        </li>
      );
    };
    return (
      <div className={styles.playerHandContainer}>
        <ul className={styles.cardsList}>
          {this.props.playerHandCards &&
            this.props.playerHandCards.map(setCardsList)}
        </ul>
      </div>
    );
  }
}

PlayerHand.propTypes = {
  playerHandCards: PropTypes.array
};

export default PlayerHand;
