import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import MintUI from "mint-ui";
import "mint-ui/lib/style.min.css";
Vue.use(MintUI);
import moment from "moment";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.prototype.moment = moment;
// 引入下拉刷新
import VueScroller from "vue-scroller";
Vue.use(VueScroller);
axios.defaults.baseURL = "http://127.0.0.1:3000";
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
