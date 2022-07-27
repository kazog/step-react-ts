/**
 * Author: Meng
 * Date: 2022-07-25
 * Desc: mock 数据
 */

export function request2({ host = 'base', url = '' } = {}) {
  return new Promise((resolve) => {
    const res = getMockData(host, url);
    resolve(res);
  });
}

// 获取数据
function getMockData(host, url) {
  switch (url) {
    case '/orderAdmin/customOrder/list':
      return home_list;
    case '/orderAdmin/customOrder/detail':
      return task_detail;
    case '/orderAdmin/customStage/queryStagePlan':
      return plan_list;
    case '/orderAdmin/customStage/queryCustomStageLog':
      return stage_log;
    default:
      return {};
  }
}

// 任务单列表数据
const home_list = {
  message: '成功',
  data: {
    data: [
      {
        productName: '窗户',
        contractSignTime: 1658298466000,
        actualStartOperationTime: 1658906459000,
        contractManagePhone: '18217036808',
        id: 1,
        brandCode: 'test',
        longitude: 120.520001,
        contractManageName: '合同管家张三',
        brandName: '测试品牌',
        ownerPhone: '18217036808',
        contractHousekeeperName: '项目管家张三',
        sapSkuNo: '1234567',
        provinceName: '上海',
        purchaseName: '采购-测试2',
        projectPlanFinishTime: 1666336720000,
        districtCode: '310010',
        dcContractCode: '1120221218',
        productManagePhone: '18217036808',
        cityCode: '3100',
        stagePlanFinishTime: 1658384854000,
        stageName: '确认品牌',
        latitude: 122.12,
        creatorId: 1,
        contractHousekeeperPhone: '18217036808',
        shopName: '上海龙阳店',
        categoryName: '室内门',
        purchasePhone: '18217036808',
        cityName: '上海市',
        ownerName: '张发',
        customOrderStatus: 1,
        shopCode: '1004',
        supplierName: '室内门-张发',
        address: '佘山镇千新公路',
        districtName: '松江区',
        productManageName: '项目经理张发',
        provinceCode: '31',
        supplyCode: '1923452',
        categoryCode: 'WZC1002',
        supplierPhone: '18217036808',
        planStartOperationTime: 1658647253000,
        deleted: 0,
        createTime: 1658359387000,
        customOrderCode: 'CUO2022072100001',
        stageCode: 'confirm_brand',
      },
      {
        productName: '窗户',
        contractSignTime: 1658298466000,
        actualStartOperationTime: 1658906459000,
        contractManagePhone: '18217036808',
        id: 2,
        brandCode: 'test',
        longitude: 120.520001,
        contractManageName: '合同管家张三',
        brandName: '测试品牌1',
        ownerPhone: '18217036808',
        contractHousekeeperName: '项目管家张三',
        sapSkuNo: '1234567',
        provinceName: '上海',
        purchaseName: '采购-测试',
        projectPlanFinishTime: 1666336720000,
        districtCode: '310010',
        dcContractCode: '1120221218',
        productManagePhone: '18217036808',
        cityCode: '3100',
        stagePlanFinishTime: 1658384854000,
        stageName: '确认品牌',
        latitude: 122.12,
        creatorId: 1,
        contractHousekeeperPhone: '18217036808',
        shopName: '上海龙阳店',
        categoryName: '室内门',
        purchasePhone: '18217036808',
        cityName: '上海市',
        ownerName: '张三',
        customOrderStatus: 1,
        shopCode: '1004',
        supplierName: '室内门-张三',
        address: '佘山镇千新公路',
        districtName: '松江区',
        productManageName: '项目经理张三',
        provinceCode: '31',
        supplyCode: '1923452',
        categoryCode: 'WZC1002',
        supplierPhone: '18217036808',
        planStartOperationTime: 1658647253000,
        deleted: 0,
        createTime: 1658359387000,
        customOrderCode: 'CUO2022072100001',
        stageCode: 'first_test',
      },
      {
        productName: '室内门1',
        contractSignTime: 1658298466000,
        actualStartOperationTime: 1658906459000,
        contractManagePhone: '18217036808',
        id: 3,
        brandCode: 'test',
        longitude: 120.520001,
        contractManageName: '合同管家张三',
        brandName: '测试品牌1',
        ownerPhone: '18217036808',
        contractHousekeeperName: '项目管家张三',
        sapSkuNo: '1234567',
        provinceName: '上海',
        purchaseName: '采购-测试1',
        projectPlanFinishTime: 1666336720000,
        districtCode: '310010',
        dcContractCode: '1120221218',
        productManagePhone: '18217036808',
        cityCode: '3100',
        stagePlanFinishTime: 1658384854000,
        stageName: '确认品牌',
        latitude: 122.12,
        creatorId: 1,
        contractHousekeeperPhone: '18217036808',
        shopName: '上海龙阳店',
        categoryName: '室内门',
        purchasePhone: '18217036808',
        cityName: '上海市',
        ownerName: '张三',
        customOrderStatus: 1,
        shopCode: '1004',
        supplierName: '室内门-张三',
        address: '佘山镇千新公路',
        districtName: '松江区',
        productManageName: '项目经理张三',
        provinceCode: '31',
        supplyCode: '1923452',
        categoryCode: 'WZC1002',
        supplierPhone: '18217036808',
        planStartOperationTime: 1658647253000,
        deleted: 0,
        createTime: 1658359387000,
        customOrderCode: 'CUO2022072100001',
        stageCode: 'design',
      },
    ],
    page: {
      curPage: 1,
      totalNum: 10,
      prePage: 1,
      totalPage: 2,
      nextPage: 2,
      pageSize: 10,
    },
  },
  code: 0,
};

// 任务单详情数据
const task_detail = {
  message: '成功',
  code: 0,
  data: {
    id: 1,
    customOrderCode: 'CUO2022072100001',
    overTime: 1,
    detailAddress: '',
    productName: '室内门1',
    contractSignTime: 1658298466000,
    actualStartOperationTime: 1658906459000,
    contractManagePhone: '18217036808',
    brandCode: 'test',
    longitude: 120.520001,
    contractManageName: '合同管家张三',
    brandName: '测试品牌1',
    ownerPhone: '18217036808',
    contractHousekeeperName: '项目管家张三',
    sapSkuNo: '1234567',
    provinceName: '上海',
    purchaseName: '采购-测试1',
    projectPlanFinishTime: 1666336720000,
    districtCode: '310010',
    dcContractCode: '1120221218',
    productManagePhone: '18217036808',
    cityCode: '3100',
    stagePlanFinishTime: 1658384854000,
    latitude: 122.12,
    creatorId: 1,
    contractHousekeeperPhone: '18217036808',
    shopName: '上海龙阳店',
    categoryName: '室内门',
    purchasePhone: '18217036808',
    cityName: '上海市',
    ownerName: '张三',
    customOrderStatus: 1,
    shopCode: '1004',
    supplierName: '室内门张三',
    address: '佘山镇千新公路',
    districtName: '松江区',
    productManageName: '项目经理张三',
    provinceCode: '31',
    supplyCode: '1923452',
    categoryCode: 'WZC1002',
    supplierPhone: '18217036808',
    planStartOperationTime: 1658647253000,
    nextFollowUpTime: 1658647253000,
    deleted: 0,
    createTime: 1658359387000,
    stageName: '下单',
    stageCode: 'create_order',
    annex: [
      {
        type: 'annexType', //附件类型  measureReport 测量报告 Drawing  方案图纸 installFinish 安装完成图
        list: [
          {
            uploadDate: '2022-07-22 16:01:01', //上传时间
            urlList: ['https://cn.bing.com/images/search?view=detailV2&ccid=Pagx4b%2BX&id=25D48FBEE14AE8CDEDFED06410AE63B9D248971A', 'https://cn.bing.com/images/search?view=detailV2&ccid=Pagx4b%2BX&id=25D48FBEE14AE8CDEDFED06410AE63B9D248971A'], //附件url集合
          },
          {
            uploadDate: '2022-07-22 16:01:01',
            urlList: ['https://cn.bing.com/images/search?view=detailV2&ccid=Pagx4b%2BX&id=25D48FBEE14AE8CDEDFED06410AE63B9D248971A'],
          },
        ],
      },
    ],
    followRecordList: [
      {
        id: 1,
        intentOrderCode: '',
        createTime: '2022/01/01 12:00',
        operatorName: '张三',
        nextFollowTime: '2022/01/01 12:00',
        operateItem: '确认品牌',
        operateRemark: 'test',
      }, {
        id: 2,
        intentOrderCode: '',
        createTime: '2022/01/01 12:00',
        operatorName: '张三',
        nextFollowTime: '2022/01/01 12:00',
        operateItem: '初测',
        operateRemark: 'test',
      },{
        id: 3,
        intentOrderCode: '',
        createTime: '2022/01/01 12:00',
        operatorName: '哈维',
        nextFollowTime: '2022/01/01 12:00',
        operateItem: '设计',
        operateRemark: 'test',
      },{
        id: 4,
        intentOrderCode: '',
        createTime: '2022/01/01 12:00',
        operatorName: '里斯',
        nextFollowTime: '2022/01/01 12:00',
        operateItem: '复测',
        operateRemark: 'test',
      },{
        id: 5,
        intentOrderCode: '',
        createTime: '2022/01/01 12:00',
        operatorName: '张三',
        nextFollowTime: '2022/01/01 12:00',
        operateItem: '下单',
        operateRemark: 'test',
      },
    ],
    customStageList: [{}],
  },
};

// 计划数据
const plan_list = {
  message: '成功',
  code: 0,
  data: []
}

const stage_log = {
  message: '成功',
  code: 0,
  data: [
    {
      id: 1,
      intentOrderCode: '',
      createTime: '2022/01/01 12:00',
      operatorName: '张三',
      nextFollowTime: '2022/01/01 12:00',
      operateItem: '确认品牌',
      operateRemark: 'test',
    }, {
      id: 2,
      intentOrderCode: '',
      createTime: '2022/01/01 12:00',
      operatorName: '张三',
      nextFollowTime: '2022/01/01 12:00',
      operateItem: '初测',
      operateRemark: 'test',
    },{
      id: 3,
      intentOrderCode: '',
      createTime: '2022/01/01 12:00',
      operatorName: '哈维',
      nextFollowTime: '2022/01/01 12:00',
      operateItem: '设计',
      operateRemark: 'test',
    },{
      id: 4,
      intentOrderCode: '',
      createTime: '2022/01/01 12:00',
      operatorName: '里斯',
      nextFollowTime: '2022/01/01 12:00',
      operateItem: '复测',
      operateRemark: 'test',
    },{
      id: 5,
      intentOrderCode: '',
      createTime: '2022/01/01 12:00',
      operatorName: '张三',
      nextFollowTime: '2022/01/01 12:00',
      operateItem: '下单',
      operateRemark: 'test',
    },
  ]
}