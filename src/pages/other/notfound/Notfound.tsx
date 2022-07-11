/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StateComponent } from "reactjs-store";
import NotfoundState from "./NotfoundState";

let _state: NotfoundState;
const Notfound = () => {
  _state = new NotfoundState();
  return <StateComponent children={render} state={_state} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Notfound;
