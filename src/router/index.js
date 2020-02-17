import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import can from "../view/Can.vue";
import list from "../view/List.vue";
import count from "../view/count.vue";
import toDoList from "../view/toDoList.vue";
import info from "../components/todolist/info.vue";
import youtube from "../components/todolist/youtube.vue";

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
    },
    {
      name: "count",
      path: "/count",
      component: count
    },
    {
      name: "toDoList",
      path: "/toDoList",
      component: toDoList,
      children: [
        {
          name: "todolist-info",
          path: "info",
          component: info
        },
        {
          name: "todolist-youtube",
          path: "youtube",
          component: youtube
        }
      ]
    }
  ]
});
