/**
 * Author: Meng
 * Date: 2022-07-13
 * Desc: 接口
 */

import { request, uploadFiles } from "../net/index";

// 例子
export function example(data = {}) {
  return request({
    url: "",
    method: "POST",
    host: "sp",
    data,
  });
}

// 例子
export function uploadImg(imgs = {}) {
  return uploadFiles(imgs);
}

// 添加跟进记录(跟进备注)
export function addStageMemo(brandName='') {
  return request({
    url: "/orderAdmin/customOrder/followUpRemark",
    method: "POST",
    data: {
      brandName
    },
  });
}