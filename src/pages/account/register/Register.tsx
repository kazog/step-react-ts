/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StateComponent } from "reactjs-store";
import RegisterState from "./RegisterState";

let _state: RegisterState;
const Register = () => {
  _state = new RegisterState();
  return <StateComponent children={render} state={_state} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Register;
