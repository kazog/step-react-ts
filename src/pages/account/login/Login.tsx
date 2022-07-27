/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */
import React from "react";
import { StoreComponent } from "reactjs-store";
import LoginStore from "./LoginStore";
import  "./Login.css";

let _store: LoginStore;
const Login = () => {
  _store = new LoginStore();
  return <StoreComponent children={render} store={_store} />;
};

function render() {
  return (
    <div className="page login">
      <img
        className="login-bg"
        alt="背景"
        src="https://cn.bing.com/th?id=OHR.Invergarry_ZH-CN9013535988_1920x1080.jpg"
      />
      <div className="login-box">
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
            placeholder="请输入密码"
            maxLength={28}
            type="password"
          />
        </div>
        <div className="login-btn button" onClick={() => {}}>
          登 录
        </div>
        <div className="row alert-box">
          <span className="alert-text button">忘记密码?</span>
          <span className="alert-text button">注册账号</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
