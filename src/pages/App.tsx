/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc: App入口页面
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StateComponent, StatefulWidget, ViewData } from "reactjs-store";

import "./App.css";
import AppState from "./AppState";
import Router from "./router";

let _state: AppState; // 数据

// App入口
function App() {
  console.log('==============> App');
  _state = new AppState();
  return <StateComponent children={render} state={_state} />;
}

function render() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
