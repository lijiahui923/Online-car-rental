import service from '@/utils/request';
/**
 * 车辆管理
 */
export function GetList(data) {
    return service.request({
        method: 'post',
        url: '/cars/list/',
        data
    });
}

export function Add(data) {
    return service.request({
        method: 'post',
        url: '/cars/add/',
        data
    });
}

export function Detailed(data) {
    return service.request({
        method: 'post',
        url: '/cars/detailed/',
        data
    });
}

export function Edit(data) {
    return service.request({
        method: 'post',
        url: '/cars/edit/',
        data
    });
}

export function Eelete(data) {
    return service.request({
        method: 'post',
        url: '/cars/delete/',
        data
    });
}

// 车辆禁启用
export function Status(data) {
    return service.request({
        method: 'post',
        url: '/cars/status/',
        data
    });
}