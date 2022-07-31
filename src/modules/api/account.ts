/**
 * Author: Meng
 * Date: 2022-07-13
 * Desc: 账号相关
 */

import { request } from "../net/index";

// 登录 {"account":"","password":"","rsa":""}
export function accountLogin(data = {account:'',password:'',rsa:'1234'}) {
  return request({
    path: "/api/xj/login",
    method: "POST",
    host: 'sp',
    data,
  });
}

// 获取首页数据
export function queryUserinfo(data = {}) {
  return request({
    path: "/account/info",
    method: "GET",
    data,
  });
}

// 获取首页数据
export function onLogout(data = {}) {
  return request({
    path: "/account/login",
    method: "GET",
    data,
  });
}
