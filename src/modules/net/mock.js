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
function getMockData(url) {
  switch (url) {
    case '/list':
      return home_list;
    case '/detail':
      return task_detail;
    case '/plan':
      return plan_list;
    case '/log':
      return stage_log;
    default:
      return {};
  }
}
