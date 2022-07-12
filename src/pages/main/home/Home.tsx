/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import HomeStore from "./HomeStore";

let _store: HomeStore;
const Home = () => {
  _store = new HomeStore();
  return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="App">
      <p>
        Edit reload.
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
