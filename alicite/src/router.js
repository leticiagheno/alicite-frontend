import Vue from "vue";
import Router from "vue-router";
import SignUp from "./pages/SignUp.vue";
import RegisterProduct from "./pages/RegisterProduct.vue";
import RegisterEquipe from "./pages/RegisterEquipe.vue";
import RecoverPass from "./pages/RecoverPass.vue";
import LoginCliente from "./pages/LoginCliente.vue";
import LoginEquipe from "./pages/LoginEquipe.vue";
import MembrosEquipe from "./pages/MembrosEquipe.vue";
import HomePage from "./pages/HomePage.vue";
import About from "./pages/About.vue";
import ListProduct from "./pages/ListProduct.vue";

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
    {
      path: "/equipe/novoMembro",
      name: "novoMembro",
      component: RegisterEquipe
    },
    {
      path: "/equipe",
      name: "equipe",
      component: MembrosEquipe
    },
    {
      path: "/produtos",
      name: "produtos",
      component: ListProduct
    }
  ]
});
