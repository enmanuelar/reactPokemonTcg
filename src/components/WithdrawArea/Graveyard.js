import React from "react";
import * as styles from "./WithdrawArea.css";
// import Card from "../Card/Card";
import PropTypes from "prop-types";

class Graveyard extends React.Component {
  render() {
    return (
      <div className={styles.graveyardZone}>
        <div className={styles.graveyardCardsContainer}>
          {this.props.graveyardData && "testing"}
        </div>
      </div>
    );
  }
}

Graveyard.propTypes = {
  graveyardData: PropTypes.array
};

export default Graveyard;
