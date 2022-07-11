/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StateComponent, StatefulWidget, ViewData } from "reactjs-store";

import "./App.css";
import AppState from "./AppState";
import Icons from "./assets";

let _state: AppState;

function App() {
  _state = new AppState();
  return <StateComponent children={render} state={_state} />;
}

function render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Icons.logo} className="App-logo" alt="logo" />
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
        <StatefulWidget child={update} store={_state.time} />
      </header>
    </div>
  );
}

function update(data: ViewData<number>) {
  return <div>{data.data}</div>;
}

export default App;
