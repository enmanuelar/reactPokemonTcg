import React from "react";
import * as styles from "./PlayerHand.css";
import Card from "../Card/Card";

class PlayerHand extends React.Component {
  state = {
    cards: [
      {
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
      },
      {
        id: "base1-46",
        name: "Charmander",
        nationalPokedexNumber: 4,
        imageUrl: "https://images.pokemontcg.io/base1/46.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/46_hires.png",
        types: ["Fire"],
        supertype: "Pokémon",
        subtype: "Basic",
        hp: "50",
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        number: "46",
        artist: "Mitsuhiro Arita",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1",
        attacks: [
          {
            cost: ["Colorless"],
            name: "Scratch",
            text: "",
            damage: "10",
            convertedEnergyCost: 1
          },
          {
            cost: ["Fire", "Colorless"],
            name: "Ember",
            text:
              "Discard 1 Energy card attached to Charmander in order to use this attack.",
            damage: "30",
            convertedEnergyCost: 2
          }
        ],
        weaknesses: [{ type: "Water", value: "×2" }]
      },
      {
        id: "base1-47",
        name: "Diglett",
        nationalPokedexNumber: 50,
        imageUrl: "https://images.pokemontcg.io/base1/47.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/47_hires.png",
        types: ["Fighting"],
        supertype: "Pokémon",
        subtype: "Basic",
        hp: "30",
        convertedRetreatCost: 0,
        number: "47",
        artist: "Keiji Kinebuchi",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1",
        attacks: [
          {
            cost: ["Fighting"],
            name: "Dig",
            text: "",
            damage: "10",
            convertedEnergyCost: 1
          },
          {
            cost: ["Fighting", "Fighting"],
            name: "Mud Slap",
            text: "",
            damage: "30",
            convertedEnergyCost: 2
          }
        ],
        resistances: [{ type: "Lightning", value: "-30" }],
        weaknesses: [{ type: "Grass", value: "×2" }]
      },
      {
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
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Confused.",
            damage: "10",
            convertedEnergyCost: 2
          }
        ],
        weaknesses: [{ type: "Psychic", value: "×2" }]
      },
      {
        id: "base1-51",
        name: "Koffing",
        nationalPokedexNumber: 109,
        imageUrl: "https://images.pokemontcg.io/base1/51.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/51_hires.png",
        types: ["Grass"],
        supertype: "Pokémon",
        subtype: "Basic",
        hp: "50",
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        number: "51",
        artist: "Mitsuhiro Arita",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1",
        attacks: [
          {
            cost: ["Grass", "Grass"],
            name: "Foul Gas",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.",
            damage: "10",
            convertedEnergyCost: 2
          }
        ],
        weaknesses: [{ type: "Psychic", value: "×2" }]
      },
      {
        id: "base1-102",
        name: "Water Energy",
        imageUrl: "https://images.pokemontcg.io/base1/102.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/102_hires.png",
        supertype: "Energy",
        subtype: "Basic",
        number: "102",
        artist: "Keiji Kinebuchi",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1"
      },
      {
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
      },
      {
        id: "base1-46",
        name: "Charmander",
        nationalPokedexNumber: 4,
        imageUrl: "https://images.pokemontcg.io/base1/46.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/46_hires.png",
        types: ["Fire"],
        supertype: "Pokémon",
        subtype: "Basic",
        hp: "50",
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        number: "46",
        artist: "Mitsuhiro Arita",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1",
        attacks: [
          {
            cost: ["Colorless"],
            name: "Scratch",
            text: "",
            damage: "10",
            convertedEnergyCost: 1
          },
          {
            cost: ["Fire", "Colorless"],
            name: "Ember",
            text:
              "Discard 1 Energy card attached to Charmander in order to use this attack.",
            damage: "30",
            convertedEnergyCost: 2
          }
        ],
        weaknesses: [{ type: "Water", value: "×2" }]
      },
      {
        id: "base1-47",
        name: "Diglett",
        nationalPokedexNumber: 50,
        imageUrl: "https://images.pokemontcg.io/base1/47.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/47_hires.png",
        types: ["Fighting"],
        supertype: "Pokémon",
        subtype: "Basic",
        hp: "30",
        convertedRetreatCost: 0,
        number: "47",
        artist: "Keiji Kinebuchi",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1",
        attacks: [
          {
            cost: ["Fighting"],
            name: "Dig",
            text: "",
            damage: "10",
            convertedEnergyCost: 1
          },
          {
            cost: ["Fighting", "Fighting"],
            name: "Mud Slap",
            text: "",
            damage: "30",
            convertedEnergyCost: 2
          }
        ],
        resistances: [{ type: "Lightning", value: "-30" }],
        weaknesses: [{ type: "Grass", value: "×2" }]
      },
      {
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
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Confused.",
            damage: "10",
            convertedEnergyCost: 2
          }
        ],
        weaknesses: [{ type: "Psychic", value: "×2" }]
      },
      {
        id: "base1-51",
        name: "Koffing",
        nationalPokedexNumber: 109,
        imageUrl: "https://images.pokemontcg.io/base1/51.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/51_hires.png",
        types: ["Grass"],
        supertype: "Pokémon",
        subtype: "Basic",
        hp: "50",
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        number: "51",
        artist: "Mitsuhiro Arita",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1",
        attacks: [
          {
            cost: ["Grass", "Grass"],
            name: "Foul Gas",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.",
            damage: "10",
            convertedEnergyCost: 2
          }
        ],
        weaknesses: [{ type: "Psychic", value: "×2" }]
      },
      {
        id: "base1-102",
        name: "Water Energy",
        imageUrl: "https://images.pokemontcg.io/base1/102.png",
        imageUrlHiRes: "https://images.pokemontcg.io/base1/102_hires.png",
        supertype: "Energy",
        subtype: "Basic",
        number: "102",
        artist: "Keiji Kinebuchi",
        rarity: "Common",
        series: "Base",
        set: "Base",
        setCode: "base1"
      }
    ]
  };

  render() {
    const setCardsList = card => {
      return (
        <li key={card.id}>
          <Card cardData={card} customClass={styles.widthAuto} />
        </li>
      );
    };
    return (
      <div className={styles.playerHandContainer}>
        <ul className={styles.cardsList}>
          {this.state.cards.map(setCardsList)}
        </ul>
      </div>
    );
  }
}

export default PlayerHand;
