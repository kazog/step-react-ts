/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StateComponent } from "reactjs-store";
import ForgetState from "./ForgetState";

let _state: ForgetState;
const Forget = () => {
  _state = new ForgetState();
  return <StateComponent children={render} state={_state} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Forget;
