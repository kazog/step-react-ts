/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc: 
 */

// 获取图片资源
export function queryPhotos(page=1, size=20) {
  return {
    url: `/curated?page=${page}&per_page=${size}`,
    method: 'GET',
  }
}
// 搜索图片
export function searchPhotos(key='nature',page=1, size=20) {
  return {
    url: `/search?query=${key}&page=${page}&per_page=${size}`,
    method: 'GET',
  }
}

// 获取精选
export function getHotPhotos(page=1) {
  return {
    url: `/curated?per_page=${page}`,
    method: 'GET',
  }
}

// 获取单张图片信息
export function getPhotoInfo(id=1) {
  return {
    url: `/photos/${id}`,
    method: 'GET',
  }
}