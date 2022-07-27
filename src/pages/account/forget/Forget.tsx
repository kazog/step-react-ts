/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import ForgetStore from "./ForgetStore";
import "./Forget.css";

let _store: ForgetStore;
const Forget = () => {
  _store = new ForgetStore();
  return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="page forget">
      <img
        className="forget-bg"
        alt="背景"
        src="https://cn.bing.com/th?id=OHR.Invergarry_ZH-CN9013535988_1920x1080.jpg"
      />
      <div className="forget-box">
        <div className="item row">
          <span className="label">邮箱</span>
          <input
            className="input"
            maxLength={28}
            placeholder="请输入邮箱"
            onBlur={(e) => {
              console.log(e);
            }}
          />
        </div>
        <div className="item row">
          <span className="label">验证码</span>
          <input
            className="input"
            placeholder="请输入验证码"
            maxLength={6}
          />
        </div>
        <div className="forget-btn button" onClick={() => {}}>
          登 录
        </div>
        <div className="row alert-box">
          <span className="alert-text button"></span>
          <span className="alert-text button">注册账号</span>
        </div>
      </div>
    </div>
  );
}

export default Forget;
