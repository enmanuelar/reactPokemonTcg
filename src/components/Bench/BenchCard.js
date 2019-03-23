import React from "react";
import * as styles from "./Bench.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

function BenchCard(props) {
  const { cardData } = props;
  return (
    <div className={styles.benchCardContainer}>
      <Card cardData={cardData} />
    </div>
  );
}

BenchCard.propTypes = {
  cardData: PropTypes.object
};

export default BenchCard;
