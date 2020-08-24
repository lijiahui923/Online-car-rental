import service from '@/utils/request';
/**
 * 　 获取地区
 */
export function CityPicker(data = {}) {
    return service.request({
        method: 'post',
        url: '/cityPicker/',
        data
    });
}

/**
 * 　 获取车牌
 */
export function GetCarsBrand(data = {}) {
    return service.request({
        method: 'post',
        url: '/common/getCarsBrand/',
        data
    });
}

/**
 * 　 获取停车场
 */
export function GetCarsBrand(data = {}) {
    return service.request({
        method: 'post',
        url: '/common/getParking/',
        data
    });
}