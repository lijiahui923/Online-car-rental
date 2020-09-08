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

export function Add(data) {
    return service.request({
        method: 'post',
        url: '/brand/add/',
        data
    });
}

export function Detailed(data) {
    return service.request({
        method: 'post',
        url: '/brand/detailed/',
        data
    });
}

export function Edit(data) {
    return service.request({
        method: 'post',
        url: '/brand/edit/',
        data
    });
}

export function Eelete(data) {
    return service.request({
        method: 'post',
        url: '/brand/delete/',
        data
    });
}

// 车辆品牌标志
export function Logo(data) {
    return service.request({
        method: 'post',
        url: '/brand/logo/',
        data
    });
}

// 车辆品牌禁启用
export function Status(data) {
    return service.request({
        method: 'post',
        url: '/brand/status/',
        data
    });
}