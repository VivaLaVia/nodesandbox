import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import toastr from "toastr";
import "../node_modules/toastr/toastr.scss"

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    toastr.info('Are you the 6 fingered man?')
    connect()
  }
}).$mount("#app");

var sock:WebSocket

function connect() {

  sock = new WebSocket("wss://echo.websocket.org/?encoding=text")

  // Open
  sock.onopen = () => {
    console.log("Connected.")
  }

  // Message
  sock.onmessage = (event) => {
    console.log("Message Received", event)
  }

  sock.onerror = function(evt) { console.log("Error", evt) };

}

function doSend(message:any) {
  toastr.info(message)
}


export const Main = {
  doSend
}