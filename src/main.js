import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

import routes from "./routes";

import "@/styles/main.scss";

Vue.use(VueRouter);

var router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(App),
});

app.$mount("#app");
