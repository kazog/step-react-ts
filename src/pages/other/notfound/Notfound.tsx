/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import NotfoundStore from "./NotfoundStore";

let _store: NotfoundStore;
const Notfound = () => {
  _store = new NotfoundStore();
  return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="App">
      asda
    </div>
  );
}

export default Notfound;
