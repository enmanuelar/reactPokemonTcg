import React, { useContext } from "react";
import * as styles from "./PlayerHand.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";
import { GamePlayContext } from "../../context/GamePlayContext";

const PlayerHand = () => {
  const [gamePlay] = useContext(GamePlayContext);

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
        {gamePlay.hand && gamePlay.hand.map(setCardsList)}
      </ul>
    </div>
  );
};

PlayerHand.propTypes = {
  playerHandCards: PropTypes.array
};

export default PlayerHand;
