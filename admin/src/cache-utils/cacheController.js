import XUtils from 'xe-utils';

// 缓存所有数据
let cacheObj = {};
// 保存所有键值
let keyArr = [];
let getExactKey = function (key) {
    let keys = keyArr.filter(currentValue => {
        return currentValue.match(key);
    });
    return keys;
}
// 设置单个
let setItem = function (key, value) {
    if (!keyArr.includes(key)) {
        keyArr.push(key);
    }
    if (XUtils.isArray(value)) {
        value.forEach(item => {
            item && !item.label && (item['label'] = item.name);
            item && !item.value && (item['value'] = item.code);
        });
    }
    cacheObj[key] = value;
}
// 设置多个
let setItems = function (keyValues) { 
    Object.keys(keyValues).forEach(key => {
        this.setItem(key, keyValues[key]);
    });
}
let getItem = function (key) {
    let exactKey = getExactKey(key);
    if (exactKey) {
        // 深拷贝并且返回
        let data = XUtils.clone(cacheObj[key], true);
        return data;
    } else {
        return [];
    }
}
let getItems = function (keys) { 
    if (XUtils.isString(keys)) {
        return this.getItem(keys);
    } else if (XUtils.isArray(keys)) {
        let result = {};
        keys.map(key => {
            result[key] = this.getItem(key);
        });
        return result;
    }else {
        return [];
    }
    
}
let removeItem = function (key) { 
    let exactKey = getExactKey(key);
    if (exactKey) {
        delete cacheObj[key];
    }
}
export default { setItem, setItems, getItem, getItems, removeItem };