import React from "react";
import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
    return (
      <div className="App">
        <h1>Monsters</h1>
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
