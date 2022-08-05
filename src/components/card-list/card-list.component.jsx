/* eslint-disable react/react-in-jsx-scope */

import { Component } from "react";
import { PropTypes } from "prop-types";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render from card-list");
    const { monsters } = this.props;
    console.log(this.props);

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
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
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  monsters: PropTypes.array,
};

export default CardList;
