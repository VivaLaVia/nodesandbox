import Vue from "vue";
import Vuex from "vuex";
import { Notification } from "./Notification.store";
import createLogger from "vuex/logger";

Vue.use(Vuex);

let debug = process.env.NODE_ENV !== "production";

export const stores = new Vuex.Store({
  modules: {
    Notification
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
