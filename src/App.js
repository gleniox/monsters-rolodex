/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  console.log("render");
  const [monsterSearch, setMonsterSearch] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    console.log("monsters effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    console.log("filteredMonsters effect fired");
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(monsterSearch);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, monsterSearch]);

  const onMonsterSearchChange = (event) => {
    const monsterSearchString = event.target.value.toLowerCase();
    setMonsterSearch(monsterSearchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monster-search-box"
        onSearchChangeHandler={onMonsterSearchChange}
        placeHolder={"Search monsters"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
