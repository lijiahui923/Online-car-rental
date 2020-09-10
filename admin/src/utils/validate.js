/**
 * Created by lijiahui on 20/09/09
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    const valid_map = ['admin', 'editor'];
    return valid_map.indexOf(str.trim()) >= 0;
}

export const isNumber = (rule, val, cb) => {
    if (/^[0-9]*$/.test(val)) {
        cb();
    } else {
        return cb(new Error('请输入数字'));
    }
}