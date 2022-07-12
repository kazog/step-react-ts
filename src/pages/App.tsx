/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc: App入口页面
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StateComponent, StatefulWidget, Store } from "reactjs-store";

import "./App.css";
import AppState from "./AppState";
import Router from "./router";

let _state: AppState; // 数据

// App入口
// function App() {
//   console.log('==============> App');
//   _state = new AppState();
//   return <StateComponent children={render} state={_state} />;
// }

// function render() {
//   return (
//     <div>
//       <div>
//         <StatefulWidget child={update} store={_state.time} />
//       </div>
//       <BrowserRouter>
//         <Router />
//       </BrowserRouter>
//     </div>
//   );
// }

// ---------------  上面为函数式编程代码，下面是类编程式代码 -------------------

class App extends StateComponent {
  constructor(props: any) {
    super(props);
    _state = new AppState();
    this.setPageState(_state);
  }
  render() {
    return (
      <div>
        <div>
          <StatefulWidget child={update} store={_state.time} />
        </div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

function update(data: Store<number>) {
  return <div>时间：{data.data}</div>;
}

export default App;
