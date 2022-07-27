/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent, StoreWidget, State } from "reactjs-store";
import HomeStore from "./HomeStore";
import "./Home.css";

let _store: HomeStore;
const Home = () => {
  _store = new HomeStore();
  return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="page home">
      <img
        className="home-bg"
        alt="背景"
        src="https://cn.bing.com/th?id=OHR.BlackSun_ZH-CN0889682619_1920x1080.jpg"
      />
      <div className="row home-banner">
        <div className="button home-banner-left"></div>
        <div className="flex home-banner-item"></div>
        <div className="button home-banner-left"></div>
      </div>

      {/* <StoreWidget state={_store.itemList} child={listView}/> */}

      <div className="home-grid">
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
        <div className="button home-grid-item"></div>
      </div>
    </div>
  );
}

function listView(data: State<any>) {
  const list = data.data;
  return <div className="test-box">{list.length}</div>
}

export default Home;
