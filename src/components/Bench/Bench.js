import React from "react";
import * as styles from "./Bench.css";
import BenchCard from "./BenchCard";
import PropTypes from "prop-types";

class Bench extends React.Component {
  render() {
    const renderBenchCards = cardData => {
      return <BenchCard key={cardData.key} cardData={cardData} />;
    };
    return (
      <div className={styles.benchZone}>
        {this.props.benchCards && this.props.benchCards.map(renderBenchCards)}
      </div>
    );
  }
}

Bench.propTypes = {
  benchCards: PropTypes.array
};

export default Bench;
