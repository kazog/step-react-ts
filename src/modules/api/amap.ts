/**
 * Author: Meng
 * Date: 2022-07-13
 * Desc: 请求接口 - 地址相关
 */
import { ENV_CONST } from "../net/config";
// import { request } from "../net/index";

// 地理逆编码
export function queryAddressName(latitude=0, longitude=0) {
  const url = `https://restapi.amap.com/v3/geocode/regeo?key=${ENV_CONST.AMAP}&location=${longitude},${latitude}&radius=2000`;
  return new Promise((resolve) => {
    
  });
}

// 地理POI
export function queryAddressPoi(
  latitude=0,
  longitude=0,
  keywords = "",
  region = ""
) {
  const url = `https://restapi.amap.com/v5/place/around?key=${ENV_CONST.AMAP}&page_size=20&location=${longitude},${latitude}&radius=3000&region=${region}&keywords=${keywords}`;
  return new Promise((resolve) => {
   
  });
}

// 搜索地址/逆编码 keywords：关键字, region：城市-默认全国
export function searchAddressPlace(keywords = "", region = "") {
  const url = `https://restapi.amap.com/v5/place/text?key=${ENV_CONST.AMAP}&page_size=25&region=${region}&keywords=${keywords}`;
  return new Promise((resolve) => {
    
  });
}

function _printLog(url='', data: any) {
  console.log(url);
  console.log(data);
}
