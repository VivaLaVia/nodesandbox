import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import stores from "./stores";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount("#app");
