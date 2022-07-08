/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props);

    var text = <div>I am the CardList Component.</div>;
    return text;
  }
}

export default CardList;