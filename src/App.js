import React from "react";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      monsterSearch: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  onMonsterSearchChange = (event) => {
    const monsterSearch = event.target.value.toLowerCase();

    this.setState({ monsterSearch });
  };

  render() {
    const { monsters, monsterSearch } = this.state;
    const { onMonsterSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(monsterSearch);
    });

    return (
      <div className="App">
        <h1>Monsters</h1>
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={onMonsterSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
