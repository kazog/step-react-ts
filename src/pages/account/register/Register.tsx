/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import RegisterStore from "./RegisterStore";

let _store: RegisterStore;
const Register = () => {
  _store = new RegisterStore();
  return <StoreComponent children={render} state={_store} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Register;
