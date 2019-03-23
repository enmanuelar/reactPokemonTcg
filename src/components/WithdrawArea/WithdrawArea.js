import React from "react";
import * as styles from "./WithdrawArea.css";
import Deck from "./Deck";
import Graveyard from "./Graveyard";

class WithdrawArea extends React.Component {
  render() {
    return (
      <div className={styles.withdrawAreaContainer}>
        <Deck />
        <Graveyard />
      </div>
    );
  }
}

export default WithdrawArea;
