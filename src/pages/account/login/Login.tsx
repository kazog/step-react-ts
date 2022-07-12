/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import LoginStore from "./LoginStore";

let _store: LoginStore;
const Login = () => {
  _store = new LoginStore();
  return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Login;
