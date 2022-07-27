/**
 * Author: Meng
 * Date: 2022-07-13
 * Desc: 请求接口 - 地址相关
 */
import { ENV_CONST } from "../net/config";
// import { request } from "../net/index";

// 地理逆编码
export function queryAddressName(latitude, longitude) {
  const url = `https://restapi.amap.com/v3/geocode/regeo?key=${ENV_CONST.AMAP}&location=${longitude},${latitude}&radius=2000`;
  return new Promise((resolve) => {
    wx.request({
      url,
      success: (res) => {
        _printLog(url, res);
        let address = { code: -1, data: {} };
        if (res.statusCode == 200 && res.data) {
          const regeo = res.data.regeocode || {};
          const info = res.data.regeocode.addressComponent || {};
          address.code = 0;
          address.data = {
            code: info.citycode,
            cityName: info.province,
            district: info.district,
            adcode: info.adcode,
            township: info.township,
            address: regeo.formatted_address
          };
        }
        resolve(address);
      },
      fail: () => {
        wx.showToast({
          icon: "none",
          title: "位置服务重启中，请稍后重试！",
        });
        resolve({ code: -2, data: null });
      },
    });
  });
}

// 地理POI
export function queryAddressPoi(
  latitude,
  longitude,
  keywords = "",
  region = ""
) {
  const url = `https://restapi.amap.com/v5/place/around?key=${ENV_CONST.AMAP}&page_size=20&location=${longitude},${latitude}&radius=3000&region=${region}&keywords=${keywords}`;
  return new Promise((resolve) => {
    wx.request({
      url,
      success: (res) => {
        _printLog(url, res);
        let address = { code: -1, data: null };
        if (res.statusCode == 200 && res.data) {
          const list = res.data.pois || [];
          // adcode: "310115", address: "花木路1378号浦东嘉里城B106B", adname: "浦东新区"
          // citycode: "021", cityname: "上海市", location: "121.563826,31.211783"
          // name: "怪兽充电(小时食光浦东嘉里城店)", pcode: "310000", pname: "上海市"
          address.code = 0;
          address.data = list;
        }
        resolve(address);
      },
      fail: () => {
        wx.showToast({
          icon: "none",
          title: "服务重启中，请稍后重试！",
        });
        resolve({ code: -2, data: null });
      },
    });
  });
}

// 搜索地址/逆编码 keywords：关键字, region：城市-默认全国
export function searchAddressPlace(keywords = "", region = "") {
  const url = `https://restapi.amap.com/v5/place/text?key=${ENV_CONST.AMAP}&page_size=25&region=${region}&keywords=${keywords}`;
  return new Promise((resolve) => {
    wx.request({
      url,
      success: (res) => {
        _printLog(url, res);
        let address = { code: -1, data: null };
        if (res.statusCode == 200 && res.data) {
          // adcode: "310115", address: "花木路1378号浦东嘉里城B106B", adname: "浦东新区"
          // citycode: "021", cityname: "上海市", location: "121.563826,31.211783"
          // name: "怪兽充电(小时食光浦东嘉里城店)", pcode: "310000", pname: "上海市"
          address.code = 0;
          address.data = res.data.pois || [];
        }
        resolve(address);
      },
      fail: () => {
        wx.showToast({
          icon: "none",
          title: "服务重启中，请稍后重试！",
        });
        resolve({ code: -2, data: null });
      },
    });
  });
}

function _printLog(url, data) {
  console.log(url);
  console.log(data);
}
