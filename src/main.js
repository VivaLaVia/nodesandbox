import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Toasted from "toastedjs";
import "toastedjs/src/sass/toast.scss";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { mapActions, mapGetters, mapState } from "vuex";

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

const onMessage = function(message) {
  console.log("Message received");
  toasted
    .show("New Message", {
      action: {
        text: "Dismiss",
        onClick: (e, toasted) => {
          toasted.delete();
        }
      }
    })
    .delete(3000);

  vm.addNotification("Notifications/addNotification", message);
};

const vm = new Vue({
  router,
  store,
  data() {
    return {
      ...mapState("Notifications", ["notifications"])
    };
  },
  computed: {
    ...mapGetters("Notifications", {
      count: "countUnreadNotificaitons"
    })
  },
  methods: {
    ...mapActions("Notifications", ["addNotification", "removeNotification"])
  },
  mounted() {
    setTimeout(function() {
      onMessage({
        id: 1,
        title: "New message",
        content: "A new message has arrived from John Doe"
      });
    }, 1500);
    console.log("Notifications", this.notifications());
  },
  render: h => h(App)
}).$mount("#app");
