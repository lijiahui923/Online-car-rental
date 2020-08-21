import service from '@/utils/request';
/**
 * 停车场列表
 */
export function GetList(data) {
    return service.request({
        method: 'post',
        url: '/parking/list/',
        data
    });
}