import Vue from "vue";
import Router from "vue-router";
import SignUp from "./pages/SignUp.vue";
import RegisterProduct from "./pages/equipe/RegisterProduct.vue";
import RegisterEquipe from "./pages/equipe/RegisterEquipe.vue";
import RecoverPass from "./pages/RecoverPass.vue";
import LoginCliente from "./pages/LoginCliente.vue";
import LoginEquipe from "./pages/equipe/LoginEquipe.vue";
import MembrosEquipe from "./pages/equipe/MembrosEquipe.vue";
import HomePage from "./pages/HomePage.vue";
import About from "./pages/About.vue";
import ListProductEquipe from "./pages/equipe/ListProductEquipe.vue";
import ListPedidosPage from "./pages/equipe/ListPedidosPage.vue";
import ProductPage from "./pages/ProductPage.vue";
import PedidosPage from "./pages/PedidosPage.vue";
import PedidoPage from "./pages/PedidoPage.vue";
import EditPedidoPage from "./pages/equipe/EditPedidoPage.vue";
import EditProduct from "./pages/equipe/EditProduct.vue";
import ListProduct from "./pages/ListProduct.vue";
import PurchPage from "./pages/PurchPage.vue";

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
      path: "/lista-produtos",
      name: "produtos",
      component: ListProductEquipe
    },
    {
      path: "/produtos",
      name: "produtosCliente",
      component: ListProduct,
      props: true
    },
    {
      path: "/pedidos",
      name: "pedidosCliente",
      component: PedidosPage,
      props: true
    },
    {
      path: "/pedidosClientes",
      name: "pedidosEquipe",
      component: ListPedidosPage,
      props: true
    },
    {
      path: "/pedido",
      name: "pedido",
      component: PedidoPage,
      props: true
    },
    {
      path: "/pedidoEquipe",
      name: "pedidoEquipe",
      component: EditPedidoPage,
      props: true
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: ProductPage,
      props: true
    },
    {
      path: "/edicao-produto/:id",
      name: "editProduto",
      component: EditProduct,
      props: true
    },
    {
      path: "/purch-page/:id",
      name: "purchPage",
      component: PurchPage,
      props: true
    }
  ]
});
