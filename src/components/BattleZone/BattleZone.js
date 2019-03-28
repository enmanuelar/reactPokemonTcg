import React from "react";
import * as styles from "./BattleZone.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

class BattleZone extends React.Component {
  render() {
    const renderBattleCards = cardData => {
      return <Card cardData={cardData} />;
    };
    return (
      <div className={styles.battleZone}>
        <div className={styles.battleCardContainer}>
          {this.props.battleCards &&
            this.props.battleCards.map(renderBattleCards)}
        </div>
      </div>
    );
  }
}

BattleZone.propTypes = {
  battleCards: PropTypes.array
};

export default BattleZone;
