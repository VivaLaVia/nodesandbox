import Vue from "vue";
import Vuex from "vuex";
import Notifications from "@/stores/notifications.store";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

let debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    Notifications
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
