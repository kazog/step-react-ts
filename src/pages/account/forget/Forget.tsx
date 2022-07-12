/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import ForgetStore from "./ForgetStore";

let _store: ForgetStore;
const Forget = () => {
  _store = new ForgetStore();
  return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Forget;
