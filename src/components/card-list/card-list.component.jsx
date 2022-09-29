/* eslint-disable react/react-in-jsx-scope */

import { PropTypes } from "prop-types";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

CardList.propTypes = {
  monsters: PropTypes.array,
};

export default CardList;