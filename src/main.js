import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import stores from "./stores";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Toasted from "toastedjs";
import "toastedjs/src/sass/toast.scss";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify, {
  iconfont: "mdi" // 'md' || 'mdi' || 'fa' || 'fa4'
});

Vue.config.productionTip = false;

let toasted = new Toasted({
  position: "bottom-left",
  duration: 3000,
  icon: {
    name: "mail_outline",
    color: "white"
  }
});

toasted
  .show("New Message", {
    action: {
      text: "Save",
      onClick: (e, toasted) => {
        toasted.delete();
      }
    }
  })
  .delete(3000);

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount("#app");
