import Vue from "vue";
import Router from "vue-router";
import SignUp from "./pages/SignUp.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: SignUp
    }
  ]
});