import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Count Dracula",
        },
        {
          name: "Gollum",
        },
        {
          name: "Shrek",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters</h1>
        {this.state.monsters.map((monster) => {
          return <p key={monster.name}>{monster.name}</p>;
        })}
      </div>
    );
  }
}

export default App;