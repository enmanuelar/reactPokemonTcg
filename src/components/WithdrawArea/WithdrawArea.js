import React from "react";
import * as styles from "./WithdrawArea.css";
import Deck from "./Deck";
import Graveyard from "./Graveyard";
import PropTypes from "prop-types";

class WithdrawArea extends React.Component {
  render() {
    return (
      <div className={styles.withdrawAreaContainer}>
        <Deck deckData={this.props.deckData} />
        <Graveyard graveyardData={this.props.graveyardData} />
      </div>
    );
  }
}

WithdrawArea.propTypes = {
  deckData: PropTypes.array,
  graveyardData: PropTypes.array
};

export default WithdrawArea;
