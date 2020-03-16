import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "../src/assets/css/reset.styl";
import "../src/assets/css/style.css";

import axios from "axios";

// axios.defaults.baseURL = "";
// vue原型对象 添加 axios属性
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
