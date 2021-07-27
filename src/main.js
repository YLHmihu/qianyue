import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "lib-flexible";
import "unicom-mobile/lib/style.css";
import Vconsole from "vconsole";
new Vconsole();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
