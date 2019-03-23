import React from "react";
import * as styles from "./Board.css";
import PrizeZone from "../PrizeZone/PrizeZone";
import Bench from "../Bench/Bench";
import BattleZone from "../BattleZone/BattleZone";
import WithdrawArea from "../WithdrawArea/WithdrawArea";

class Board extends React.Component {
  render() {
    return (
      <div className={styles.boardContainer}>
        <div className={styles.board}>
          <div className={styles.bottomSide}>
            bottom
            <PrizeZone />
            <Bench />
            <BattleZone />
            <WithdrawArea />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
