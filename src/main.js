import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import router from "./router"; //引入 router

Vue.config.productionTip = false;
Vue.use(VueAxios, axios, VueRouter);

new Vue({
  render: h => h(App),
  store, // 加入 store
  router //使用 router
}).$mount("#app");
