/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StateComponent, StatefulWidget, ViewData } from "reactjs-store";

import "./App.css";
import AppState from "./AppState";
import Icons from "../assets/index";

let _state: AppState; // 数据

function App() {
  console.log('==============> App');
  _state = new AppState();
  return <StateComponent children={render} state={_state} />;
}

function render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Icons.logo} className="App-logo" alt="logo" />
        <p>
          这是一套测试代码
        </p>
        <h3>时间更新</h3>
        <StatefulWidget child={update} store={_state.time} />
      </header>
    </div>
  );
}

function update(data: ViewData<number>) {
  return <div>{data.data}</div>;
}

export default App;
