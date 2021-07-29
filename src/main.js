import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "lib-flexible";
import "unicom-mobile/lib/style.css";
import Vconsole from "vconsole/dist/vconsole.min";
new Vconsole();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
