/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StateComponent } from "reactjs-store";
import LoginState from "./LoginState";

let _state: LoginState;
const Login = () => {
  _state = new LoginState();
  return <StateComponent children={render} state={_state} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Login;
