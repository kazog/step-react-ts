/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc: App入口页面
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StoreComponent, StoreWidget, State } from "reactjs-store";

import "./App.css";
import AppStore from "./AppStore";
import Router from "./router";

let _store: AppStore; // 数据

// App入口
// function App() {
//   console.log('==============> App');
//   _store = new AppStore();
//   return <StoreComponent children={render} store={_store} />;
// }

// function render() {
//   return (
//     <div>
//       <div>
//         <StoreWidget child={update} store={_store.time} />
//       </div>
//       <BrowserRouter>
//         <Router />
//       </BrowserRouter>
//     </div>
//   );
// }

// ---------------  上面为函数式编程代码，下面是类编程式代码 -------------------

class App extends StoreComponent {
  constructor(props: any) {
    super(props);
    _store = new AppStore();
    this.setStore(_store);
  }
  render() {
    return (
      <div>
        <div>
        </div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
