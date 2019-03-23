import React from "react";
import * as styles from "./PrizeZone.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

function PrizeCard(props) {
  const { cardData } = props;
  return (
    <div className={styles.prizeCardContainer}>
      <Card cardData={cardData} />
    </div>
  );
}

PrizeCard.propTypes = {
  cardData: PropTypes.object
};

export default PrizeCard;
