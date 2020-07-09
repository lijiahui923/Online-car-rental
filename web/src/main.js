import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugin/aMap";
import "lib-flexible";
import "./icons";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import commComponent from './components';
Vue.use(commComponent);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
