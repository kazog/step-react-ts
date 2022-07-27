/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";

// let _store: NotfoundStore;
const ProductList = () => {
  // _store = new NotfoundStore();
  // return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="page notfound">
      <img
        className="notfound-bg"
        alt="背景"
        src="https://cn.bing.com/th?id=OHR.Invergarry_ZH-CN9013535988_1920x1080.jpg"
      />
      <div className="notfound-box">
        <span className="str404">40404</span>
      </div>
    </div>
  );
}

export default ProductList;
