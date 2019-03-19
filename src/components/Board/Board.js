import React from "react";
import * as styles from "./Board.css";

class Board extends React.Component {
  render() {
    return (
      <div className={styles.boardContainer}>
        <div className={styles.board}>
          {/*<div className={styles.cardPlaceholder}>*/}
          {/*<img*/}
          {/*className={styles.boardCard}*/}
          {/*src="https://images.pokemontcg.io/base1/45.png"*/}
          {/*alt=""*/}
          {/*/>*/}
          {/*</div>*/}
          <div className={styles.bottomSide}>
            bottom
            <div className={styles.prizeZone}>
              <div className={styles.prizeCardContainer}>Price 1</div>
              <div className={styles.prizeCardContainer}>Price 2</div>
              <div className={styles.prizeCardContainer}>Price 3</div>
              <div className={styles.prizeCardContainer}>Price 4</div>
              <div className={styles.prizeCardContainer}>Price 5</div>
              <div className={styles.prizeCardContainer}>Price 6</div>
            </div>
            <div className={styles.benchZone}>
              <div className={styles.benchCardContainer}>card 1</div>
              <div className={styles.benchCardContainer}>card 2</div>
              <div className={styles.benchCardContainer}>card 3</div>
              <div className={styles.benchCardContainer}>card 4</div>
              <div className={styles.benchCardContainer}>card 5</div>
            </div>
            <div className={styles.battleZone}>
              <div className={styles.battleCardContainer}>battle card</div>
            </div>
            <div className={styles.rightAreaContainer}>
              <div className={styles.deckZone}>
                <div className={styles.deckCardsContainer}>deck cards</div>
              </div>

              <div className={styles.discardZone}>
                <div className={styles.discardCardsContainer}>
                  discard cards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
