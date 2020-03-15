import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => {
      return import("../components/login/login.vue");
    },
    meta: {
      title: "login"
    }
  },
  {
    path: "/",
    name: "root",
    redirect: "/login"
  }
];
const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
    console.log("test");
  }
  next();
});
export default router;
