import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Glenio", lastName: "Nogueira" },
      company: "Microsoft",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I'm {this.state.name.firstName}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              // Shallow merge.
              this.setState({ name: { ...this.state.name, firstName: "Thomas"} });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
