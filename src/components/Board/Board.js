import React from "react";
import * as styles from "./Board.css";
import PrizeZone from "../PrizeZone/PrizeZone";
import Bench from "../Bench/Bench";
import BattleZone from "../BattleZone/BattleZone";
import WithdrawArea from "../WithdrawArea/WithdrawArea";
import PropTypes from "prop-types";

class Board extends React.Component {
  render() {
    return (
      <div className={styles.boardContainer}>
        <div className={styles.board}>
          <div className={styles.bottomSide}>
            bottom
            <PrizeZone prizeCards={this.props.prizes} />
            <Bench benchCards={this.props.bench} />
            <BattleZone battleCards={this.props.battleCards} />
            <WithdrawArea
              deckData={this.props.deckData}
              graveyardData={this.props.graveyardData}
            />
          </div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  deckData: PropTypes.array,
  graveyardData: PropTypes.array,
  bench: PropTypes.array,
  prizes: PropTypes.array,
  battleCards: PropTypes.array
};

export default Board;
