import Vue from "vue";
import VueRouter from "vue-router";
import View from "../views/View.vue";
import List from "../views/List.vue";
import ListInfinite from "../views/ListInfinite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/infinite",
    name: "ListInfinite",
    component: ListInfinite,
  },
  {
    path: "/view",
    name: "View",
    component: View,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
