import React from "react";
import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      monsterSearch: '',
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

  render() {
    console.log("render");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.monsterSearch);
    });

    return (
      <div className="App">
        <h1>Monsters</h1>
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(event) => {
            const monsterSearch = event.target.value.toLowerCase();
            console.log(monsterSearch);

            this.setState({ monsterSearch });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
