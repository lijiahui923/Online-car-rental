import catchInstance from './cacheController';
import axios from "axios";
import XEUtils from 'xe-utils';
import { config } from '@vue/test-utils';
import cacheInstance from './cacheController';

const keyValue = {
    cacheAll: function () {
        return new Promise((resolve, reject) => {
            axios({
                method: "get",
                url: 'http://mock.studyinghome.com/mock/5f0d436be525ff20854f7c08/maoyan/keyName',
            }).then((response) => {
                catchInstance.setItems(response.data.data);
                resolve(response.data.data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    getItem: function (key) {
        let _config = {};
        if (XEUtils.isPlainObject(config)) {
            _config = config;
        }
        let items = cacheInstance.getItem(key);
        return items;
    },
    setItem: function (key, value) {
        cacheInstance.setItem(key, value);
    }
}

export default keyValue;