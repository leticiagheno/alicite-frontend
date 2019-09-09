import Vue from "vue";
import Router from "vue-router";
import SignUp from "./pages/SignUp.vue";
import Login from "./pages/Login.vue";
import HomePage from "./pages/HomePage.vue";
import About from "./pages/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/sobre",
      name: "about",
      component: About
    },

  ]
});