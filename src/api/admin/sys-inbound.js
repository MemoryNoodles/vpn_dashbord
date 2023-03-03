import request from '@/utils/request'

// 查询节点列表
export function listInbound(query) {
  return request({
    url: '/api/v1/sys-inbound',
    method: 'get',
    params: query
  })
}
// 新增节点
export function addInbound(query) {
  return request({
    url: '/api/v1/sys-inbound',
    method: 'post',
    params: query
  })
}
// 删除节点
export function deleteInbound(query) {
  return request({
    url: '/api/v1/sys-inbound',
    method: 'delete',
    params: query
  })
}
