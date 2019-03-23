import React from "react";
import * as styles from "./Board.css";
import Card from "../Card/Card";

class Board extends React.Component {
  render() {
    const cardData = {
      id: "base1-45",
      name: "Caterpie",
      nationalPokedexNumber: 10,
      imageUrl: "https://images.pokemontcg.io/base1/45.png",
      imageUrlHiRes: "https://images.pokemontcg.io/base1/45_hires.png",
      types: ["Grass"],
      supertype: "Pokémon",
      subtype: "Basic",
      hp: "40",
      retreatCost: ["Colorless"],
      convertedRetreatCost: 1,
      number: "45",
      artist: "Ken Sugimori",
      rarity: "Common",
      series: "Base",
      set: "Base",
      setCode: "base1",
      attacks: [
        {
          cost: ["Grass"],
          name: "String Shot",
          text:
            "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
          damage: "10",
          convertedEnergyCost: 1
        }
      ],
      weaknesses: [{ type: "Fire", value: "×2" }]
    };
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
              <div className={styles.prizeCardContainer}>
                <Card cardData={cardData} />
              </div>
              <div className={styles.prizeCardContainer}>Price 2</div>
              <div className={styles.prizeCardContainer}>Price 3</div>
              <div className={styles.prizeCardContainer}>Price 4</div>
              <div className={styles.prizeCardContainer}>Price 5</div>
              <div className={styles.prizeCardContainer}>Price 6</div>
            </div>
            <div className={styles.benchZone}>
              <div className={styles.benchCardContainer}>
                <Card cardData={cardData} />
              </div>
              <div className={styles.benchCardContainer}>card 2</div>
              <div className={styles.benchCardContainer}>card 3</div>
              <div className={styles.benchCardContainer}>card 4</div>
              <div className={styles.benchCardContainer}>card 5</div>
            </div>
            <div className={styles.battleZone}>
              <div className={styles.battleCardContainer}>
                <Card cardData={cardData} />
              </div>
            </div>
            <div className={styles.rightAreaContainer}>
              <div className={styles.deckZone}>
                <div className={styles.deckCardsContainer}>
                  <Card cardData={cardData} />
                </div>
              </div>

              <div className={styles.discardZone}>
                <div className={styles.discardCardsContainer}>
                  <Card cardData={cardData} />
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
