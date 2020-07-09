import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index.vue")
      },
      {
        path: "/safe",
        name: "Safe",
        component: () => import("../views/safe/index.vue")
      },
      {
        path: "/pwd",
        name: "Pwd",
        component: () => import("../views/safe/password.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
