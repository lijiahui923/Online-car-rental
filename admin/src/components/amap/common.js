// 经纬度
export function getLngLag(e) {
    return {
        lon: e.lnglat.getLng(),
        lag: e.lnglat.getLat(),
        value: `${e.lnglat.getLng()},${e.lnglat.getLat()}`
    }
}


// 定位 地址转成经纬度
export function cityToLngLag(address, map) {
    const geocoder = new AMap.Geocoder();
    geocoder.getLocation(address, (status, reslut) => {
        if (status === 'complete' && reslut.info === 'OK') {
            let lat = reslut.geocodes[0].location.lat; // 纬度
            let lng = reslut.geocodes[0].location.lng; // 经度
            map.setCenter([lng, lat]); //设置地图中心点
        } else {
            log.error('根据地址查询位置失败');
        }
    });
}

let marker = null;
// 地图上的覆盖物
export function addMarker(lngLag, map) {
    if (marker) {
        map.remove(marker);
        marker = null;
    } else {
        marker = new AMap.Marker({
            position: lngLag.split(',').map(item => Number(item))
        });
        map.add(marker);
    }

}