import React, { useContext } from "react";
import * as styles from "./Board.css";
import PrizeZone from "../PrizeZone/PrizeZone";
import Bench from "../Bench/Bench";
import BattleZone from "../BattleZone/BattleZone";
import WithdrawArea from "../WithdrawArea/WithdrawArea";
import PropTypes from "prop-types";
import { GamePlayContext } from "../../context/GamePlayContext";

const Board = () => {
  const [gamePlay] = useContext(GamePlayContext);
  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        <div className={styles.bottomSide}>
          bottom
          <PrizeZone prizeCards={gamePlay.prizes} />
          <Bench benchCards={gamePlay.bench} />
          <BattleZone battleCards={gamePlay.battleCards} />
          <WithdrawArea
            deckData={gamePlay.deckData}
            graveyardData={gamePlay.graveyardData}
          />
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {
  deckData: PropTypes.array,
  graveyardData: PropTypes.array,
  bench: PropTypes.array,
  prizes: PropTypes.array,
  battleCards: PropTypes.array
};

export default Board;
