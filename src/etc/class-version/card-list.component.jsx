/* eslint-disable react/react-in-jsx-scope */

import { Component } from "react";
import { PropTypes } from "prop-types";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render from card-list");
    const { monsters } = this.props;
    console.log(this.props);

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  monsters: PropTypes.array,
};

export default CardList;
