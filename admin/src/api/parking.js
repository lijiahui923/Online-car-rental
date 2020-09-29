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

export function Add(data) {
    return service.request({
        method: 'post',
        url: '/parking/add/',
        data
    });
}

export function Detailed(data) {
    return service.request({
        method: 'post',
        url: '/parking/detailed/',
        data
    });
}

export function Edit(data) {
    return service.request({
        method: 'post',
        url: '/parking/edit/',
        data
    });
}

export function Delete(data) {
    return service.request({
        method: 'post',
        url: '/parking/delete/',
        data
    });
}