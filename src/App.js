import React from "react";
import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      monsterSearch: "",
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onMonsterSearchChange = (event) => {
    const monsterSearch = event.target.value.toLowerCase();
    console.log(monsterSearch);

    this.setState({ monsterSearch });
  };

  render() {
    console.log("render");

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
        {filteredMonsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
