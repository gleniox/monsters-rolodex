/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";
import { PropTypes } from "prop-types";
import "./card.styles.css";

class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

CardContainer.propTypes = {
  monster: PropTypes.object,
};

export default CardContainer;
