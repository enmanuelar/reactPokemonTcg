import React from "react";
import * as styles from "./BattleZone.css";
import Card from "../Card/Card";

class BattleZone extends React.Component {
  state = {
    battleCard: {
      id: "base1-49",
      name: "Drowzee",
      nationalPokedexNumber: 96,
      imageUrl: "https://images.pokemontcg.io/base1/49.png",
      imageUrlHiRes: "https://images.pokemontcg.io/base1/49_hires.png",
      types: ["Psychic"],
      supertype: "Pokémon",
      subtype: "Basic",
      hp: "50",
      convertedRetreatCost: 0,
      number: "49",
      artist: "Ken Sugimori",
      rarity: "Common",
      series: "Base",
      set: "Base",
      setCode: "base1",
      attacks: [
        {
          cost: ["Colorless"],
          name: "Pound",
          text: "",
          damage: "10",
          convertedEnergyCost: 1
        },
        {
          cost: ["Psychic", "Psychic"],
          name: "Confuse Ray",
          text: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
          damage: "10",
          convertedEnergyCost: 2
        }
      ],
      weaknesses: [{ type: "Psychic", value: "×2" }]
    }
  };
  render() {
    return (
      <div className={styles.battleZone}>
        <div className={styles.battleCardContainer}>
          <Card cardData={this.state.battleCard} />
        </div>
      </div>
    );
  }
}

export default BattleZone;
