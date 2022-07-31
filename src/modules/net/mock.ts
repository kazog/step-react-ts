/**
 * Author: Meng
 * Date: 2022-07-25
 * Desc: mock 数据
 */

export function request2({ host = 'base', url = '' } = {}) {
  return new Promise((resolve) => {
    const res = getMockData(url);
    resolve(res);
  });
}

// 获取数据
function getMockData(url: string): any {
  switch (url) {
    case '/list':
      return {};
    case '/detail':
      return {};
    case '/plan':
      return {};
    case '/log':
      return {};
    default:
      return {};
  }
}
