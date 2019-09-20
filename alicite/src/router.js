import Vue from "vue";
import Router from "vue-router";
import SignUp from "./pages/SignUp.vue";
import RegisterProduct from "./pages/RegisterProduct.vue";
import RecoverPass from "./pages/RecoverPass.vue";
import LoginCliente from "./pages/LoginCliente.vue";
import LoginEquipe from "./pages/LoginEquipe.vue";
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
      path: "/loginCliente",
      name: "loginCliente",
      component: LoginCliente
    },
    {
      path: "/loginEquipe",
      name: "loginEquipe",
      component: LoginEquipe
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
    {
      path: "/recuperarSenha",
      name: "recoverPass",
      component: RecoverPass
    },
    {
      path: "/registrarProduto",
      name: "registerProduct",
      component: RegisterProduct
    },

  ]
});