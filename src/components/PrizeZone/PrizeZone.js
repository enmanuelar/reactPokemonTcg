import React from "react";
import * as styles from "./PrizeZone.css";
import PrizeCard from "./PrizeCard";
import PropTypes from "prop-types";

class PrizeZone extends React.Component {
  render() {
    const renderPrizeCards = cardData => {
      return <PrizeCard cardData={cardData} />;
    };
    return (
      <div className={styles.prizeZone}>
        {this.props.prizeCards && this.props.prizeCards.map(renderPrizeCards)}
      </div>
    );
  }
}

PrizeZone.propTypes = {
  prizeCards: PropTypes.array
};

export default PrizeZone;
