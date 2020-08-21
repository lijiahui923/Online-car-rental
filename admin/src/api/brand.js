import service from '@/utils/request';
/**
 * 品牌列表
 */
export function GetList(data) {
    return service.request({
        method: 'post',
        url: '/brand/list/',
        data
    });
}