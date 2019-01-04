import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import stores from "./stores";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Toasted from "toastedjs";
import "../node_modules/toastedjs/dist/toasted.min.css";

Vue.use(Vuetify);

Vue.config.productionTip = false;

let toasted = new Toasted({
  position: "bottom-left",
  theme: "alive"
});

toasted.show("New Message", {
  text: "Dismiss",
  onClick: (e, toasted) => {
    toasted.delete();
  }
});

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount("#app");
