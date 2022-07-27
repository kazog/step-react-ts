/**
 * Author: Meng
 * Date: 2022-07-13
 * 网络配置项
 */
// import { getTokenStr } from "../store/index";

const ENV_NAME = {
  PROD: 'prod',
  TEST: 'test',
  DEV: 'dev'
}

export const ENV_CONST = {
  PKEY: '563492ad6f91700001000001c79e2acd5ad3461baf2cb018a7d70f48',
  AMAP: "4e013fcd32723446a88ce0880c425a88", // 高德地图key
  env: ENV_NAME.PROD,
  // env: ENV_NAME.TEST,
  // env: ENV_NAME.DEV,
}

export function requestHost(env = ENV_NAME.PROD, host = 'base') {
  const url = _ENV_HOST[env][host];
  return url;
}

export function requestHeader(header = {}) {
  return {
    ...header,
    toekn: 'asdaksdhakjsdhkaj'
  };
}

export function requestParams(params = {}) {
  return {
    ...params,
    sign: 'alskdmalksda',
  };
}

const _ENV_HOST = {
  prod: {
    base: 'https://prodbase123.com',
    auth: 'https://prodauth123.com'
  },
  test: {
    base: 'https://testase123.com',
    auth: 'https://testauth123.com'
  },
  dev: {
    base: '/axio',
    auth: '/apis'
  },
}