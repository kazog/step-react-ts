/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StateComponent } from "reactjs-store";
import HomeState from "./HomeState";

let _state: HomeState;
const Home = () => {
  _state = new HomeState();
  return <StateComponent children={render} state={_state} />;
};

function render() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default Home;
