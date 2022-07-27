/**
 * Author: Meng
 * Date: 2022-07-13
 * Desc: 接口
 */

import { request, uploads } from "../net/index";
import { request2 } from "../net/mock";

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
  return uploads(imgs);
}

/**  获取首页列表数据
 * 内部角色，显示俩；   外部供应商，只显示一个确认品牌时间；
data = {
  createTimeType         创建时间 1:今天,2:7天内,3:15天内,4:一个月内      ｜内部员工显示
  confirmBrandTimeType   确认品牌时间 1:今天,2:7天内,3:15天内,4:一个月内  ｜内部员工/供应商都显示
  projectWorkStatus      工地施工状态 1 已开工 0 未开工
  overTime   任务单（当前节点）是否逾期 1 已逾期 0 未逾期 
  stageCode    节点枚举 如确认品牌：confirmBrand 查询全部时传空
  ownerName      业主姓名
  ownerPhone   业主手机号
  contractCode    合同号
} */
export function quertHomeList(data = {}) {
  return request2({
    url: "/orderAdmin/customOrder/list",
    method: "GET",
    data,
  });
}

// 获取任务单详情
export function quertTaskDetail(id = 0) {
  return request2({
    url: "/orderAdmin/customOrder/detail",
    method: "GET",
    data: {
      id
    },
  });
}

// 修改业主手机号
export function updateOwnerInfo(data={}) {
  return request({
    url: "/orderAdmin/customOrder/update",
    method: "POST",
    data,
  });
}

/**  各项完成操作
data = {
  id: '',                         // 工序id
  customOrderId: '',              // 任务单id
  customOrderCode: '',            // 任务单code
  currentStageCode: '',           // 当前工序code
  operationItemCode: '',          // 操作项code
  firstLevelOverdueReasonCode: '', // 一级逾期原因编码
  firstLevelOverdueReason: '',    // 一级逾期原因
  secondLevelOverdueReasonCode: '', // 二级逾期原因编码
  secondLevelOverdueReason: '',     // 二级逾期原因
  otherManualOverdueReason: '',   // 其它手写逾期原因
  urls: '',                       // 上传url
  remark: '',                     // 备注
  nextFollowDate: '',             // 下次跟进时间（跟进备注）
  brandCode: '',                  // 品牌相关信息（确认品牌）
  brandName: '',                  // 品牌相关信息（确认品牌）
  clockInStatus: '',              // 打卡状态 (初测)
  clockAdrress: '',               // 打卡地址
  rangeMeters: '',                // 打卡地址距离业主提供的经纬度相隔的距离（米）
  completeCurrentStageDate: '', // 完成当前工序的时间
  createOrderPersonPhone: '', // 下单人手机号
  channelOrderItemIds: '', // 关联订单行项目的id集合
  expectDeliveryDate: '', // 预计配送完成（修改配送日期）
  expectInstallDate: '', // 预约安装时间(完成配送)
} */ 
export function commitHandlers(data={}) {
  return request({
    url: "/orderAdmin/customStage/update",
    method: "POST",
    data
  });
}

// 查询 查看工期计划 接口
export function queryStagePlans(customOrderCode='') {
  return request({
    url: "/orderAdmin/customStage/queryStagePlan",
    method: "GET",
    data: {
      customOrderCode
    },
  });
}

// 查询 跟进记录 接口
export function queryStageLogs(customOrderCode='') {
  return request2({
    url: "/orderAdmin/customStage/queryCustomStageLog",
    method: "GET",
    data: {
      customOrderCode
    },
  });
}

// 获取逾期原因
export function queryOverReason(stageCode='') {
  return request({
    url: "/orderAdmin/customStage/queryOverDueReason",
    method: "GET",
    data: {
      stageCode
    },
  });
}

// 获取工序节点信息
export function queryStageNode(id='') {
  return request({
    url: "/orderAdmin/customStage/detail",
    method: "GET",
    data: {
      stageCode
    },
  });
}

// 修改配送时间
export function updateeDeliveryDate(id='') {
  return request({
    url: "/orderAdmin/customStage/updatePlanCompleteDeliveryDate",
    method: "POST",
    data: {
      stageCode
    },
  });
}

// 查询品牌列表
export function queryStageBrand(brandName='') {
  return request({
    url: "/orderAdmin/customStage/queryBrand",
    method: "GET",
    data: {
      brandName
    },
  });
}

// 相关联系人修改
export function updateContactInfo(brandName='') {
  return request({
    url: "/orderAdmin/customOrder/update",
    method: "POST",
    data: {
      brandName
    },
  });
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