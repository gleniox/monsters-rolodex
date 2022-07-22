/* eslint-disable react/react-in-jsx-scope */

import { Component } from "react";
import { PropTypes } from "prop-types";

class CardList extends Component {
  render() {
    console.log('render from card-list');
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  monsters: PropTypes.array,
};

export default CardList;
