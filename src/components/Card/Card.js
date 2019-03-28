import React from "react";
import * as styles from "./Card.css";
import PropTypes from "prop-types";

class Card extends React.Component {
  state = {
    isActive: false
  };
  handleCardClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  render() {
    const { cardData } = this.props;
    if (!cardData) return;
    const customClass = this.props.customClass ? this.props.customClass : "";
    //TODO: handle the onKeyUp event
    return (
      <div
        className={`${styles.cardContainer} ${customClass} ${
          this.state.isActive ? styles.slideTop : ""
        }`}
        onClick={this.handleCardClick}
        onKeyUp={this.handleCardClick}
        role={"button"}
        tabIndex="-1"
      >
        <img
          className={styles.cardImage}
          src={cardData.imageUrl}
          alt={`${cardData.name}_image`}
        />
      </div>
    );
  }
}

Card.propTypes = {
  cardData: PropTypes.object,
  customClass: PropTypes.string
};

export default Card;
