import Vue from 'vue';
import XEUtils from 'xe-utils';
import VXEUtils from 'vxe-utils';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n
import '@/styles/index.scss'; // global css
import App from './App';
import store from './store';
import router from './router';
import '@/icons'; // icon
import '@/permission';
import '@/data-initialization';
import '@/components/testRender/render';
import commComponent from '@/common';
import keyValue from './cache-utils';
// import "./plugin/aMap";
import './../plugin/aMap';
// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
Vue.use(commComponent);
Vue.use(VXEUtils, XEUtils, {mounts: ['cookie']});
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.config.productionTip = false;
// Vue.prototype.$Proxy = interfaces;
// Vue.prototype.$XUtils = XUtils;
// Vue.prototype.$utils = XEUtils;
// Vue.prototype.$cookie = XEUtils.cookie;
Vue.prototype.$KeyValue = keyValue;
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});