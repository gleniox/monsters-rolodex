/* eslint-disable react/react-in-jsx-scope */

import { Component } from "react";
import { PropTypes } from "prop-types";

class CardList extends Component {
  render() {
    console.log("render from card-list");
    const { monsters } = this.props;
    console.log(this.props);

    return (
      <div>
        {monsters.map((monster) => {
          return <div className="card-container" key={monster.id}>
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>;
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  monsters: PropTypes.array,
};

export default CardList;
