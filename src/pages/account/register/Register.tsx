/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import RegisterStore from "./RegisterStore";
import "./Register.css";

let _store: RegisterStore;
const Register = () => {
  _store = new RegisterStore();
  return <StoreComponent children={render} state={_store} />;
};

function render() {
  return (
    <div className="page register">
      <img
        className="register-bg"
        alt="背景"
        src="https://cn.bing.com/th?id=OHR.Invergarry_ZH-CN9013535988_1920x1080.jpg"
      />
      <div className="register-box">
        <div className="item row">
          <span className="label">用户名</span>
          <input
            className="input"
            maxLength={28}
            placeholder="请输入用户名"
            onBlur={(e) => {
              console.log(e);
            }}
          />
        </div>
        <div className="item row">
          <span className="label">密码</span>
          <input
            className="input"
            placeholder="请输入用户名"
            maxLength={28}
            type="password"
          />
        </div>
        <div className="item row">
          <span className="label">确认密码</span>
          <input
            className="input"
            placeholder="请输入用户名"
            maxLength={28}
            type="password"
          />
        </div>
        <div className="register-btn button" onClick={() => {}}>
          登 录
        </div>
      </div>
    </div>
  );
}

export default Register;
