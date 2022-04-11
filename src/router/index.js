import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    alias: ["/casa", "/hom", "/inicio"],
  },
  {
    path: "/opinions",
    name: "opinions",
    alias: ["/opin*", "/opiniones", "/opinar"],
    component: () =>
      import(/* webpackChunkName:"opinion"*/ "../views/OpinionsView.vue"),
  },
  {
    path: "/administration",
    name: "admi",
    alias: ["/adm*", "/administracion", "/admin*"],
    component: () =>
      import(
        /* webpackChunkName:"administration"*/ "../views/AdministrationView.vue"
      ),
  },
  {
    path: "*",
    name: "error404",
    component: () => import("../views/Error404View.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
