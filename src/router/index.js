import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import can from "../view/Can.vue";
import list from "../view/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "HelloWorld",
      path: "/HelloWorld",
      component: HelloWorld
    },
    {
      name: "can",
      path: "/can",
      component: can
    },
    {
      name: "list",
      path: "/list",
      component: list
    }
  ]
});
