<template>
  <v-app color="grey lighten-5" id="font-app">
    <div class="appClass">
      <v-app-bar color="grey lighten-3" dense>
        <v-toolbar-title @click="homePage" id="tool-title">Alicitê</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn
          @click="loginClientePage"
          v-if="showLoginCliente"
          v-bind:title="cliente"
          text
          color="pink lighten-1"
        >Login</v-btn>
        <v-btn @click="loginEquipePage" v-if="showLoginEquipe" v-bind:title="equipe" icon>
          <v-icon color="pink lighten-1">mdi-account-supervisor</v-icon>
        </v-btn>
        <v-btn
          @click="produtosCliente"
          v-if="showProdutosCliente"
          text
          color="pink lighten-1"
        >Produtos</v-btn>
        <v-btn @click="pedidosCliente" v-if="showPedidosCliente" text color="pink lighten-1">Pedidos</v-btn>
        <v-btn
          @click="pedidosEquipe"
          v-if="showEditPedidoEquipe"
          text
          color="pink lighten-1"
        >Pedidos</v-btn>
        <v-btn
          @click="produtosEquipe"
          v-if="showProdutosEquipe"
          text
          color="pink lighten-1"
        >Produtos</v-btn>
        <v-btn @click="membros" v-if="showMembros" text color="pink lighten-1">Membros</v-btn>
        <v-btn @click="logoff" v-if="showLogoff" text color="pink lighten-1">
          <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view class="teste" />

      <v-footer color="grey lighten-3">
        <v-icon color="pink lighten-1" id="hanger">mdi-information</v-icon>
        <a @click="aboutPage" class="footer-text">Sobre</a>
        <div class="flex-grow-1"></div>
        <v-icon color="pink lighten-1" id="hanger">mdi-hanger</v-icon>
        <div>
          <a
            class="footer-text"
            href="https://github.com/leticiagheno"
          >&copy; Letícia Gheno Baldissarelli</a>
        </div>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "./router";
import { EventBus } from "../src/main";

export default {
  name: "App",
  vuetify: new Vuetify(),
  data: () => ({
    showLoginEquipe: true,
    showLoginCliente: true,
    showLogoff: false,
    showNewProduct: false,
    showMembros: false,
    showProdutosEquipe: false,
    showProdutosCliente: false,
    showPedidosCliente: false,
    showEditPedidoEquipe: false,
    equipe: "Login da equipe",
    cliente: "Login comercial"
  }),
  created() {
    EventBus.$on("openCliente", () => {
      this.showLoginEquipe = false;
      this.showLoginCliente = false;
      this.showLogoff = true;
      this.showProdutosEquipe = false;
      this.showProdutosCliente = true;
      this.showPedidosCliente = true;
      this.showMembros = false;
      this.showEditPedidoEquipe = false;
    });
    EventBus.$on("openEquipe", () => {
      this.showLoginEquipe = false;
      this.showLoginCliente = false;
      this.showProdutosEquipe = true;
      this.showProdutosCliente = false;
      this.showPedidosCliente = false;
      this.showLogoff = true;
      this.showNewProduct = true;
      this.showMembros = true;
      this.showEditPedidoEquipe = true;
    });
    EventBus.$on("onlyLogin", () => {
      this.showLoginEquipe = true;
      this.showLoginCliente = true;
      this.showProdutosEquipe = false;
      this.showProdutosCliente = false;
      this.showPedidosCliente = false;
      this.showLogoff = false;
      this.showMembros = false;
      this.showEditPedidoEquipe = false;
    });
  },
  methods: {
    loginClientePage() {
      this.showLoginEquipe = true;
      this.showLoginCliente = false;
      router.push({ name: "loginCliente" });
    },
    loginEquipePage() {
      this.showLoginEquipe = false;
      this.showLoginCliente = true;
      router.push({ name: "loginEquipe" });
    },
    logoff() {
      this.showLoginEquipe = true;
      this.showLoginCliente = true;
      this.showProdutosEquipe = false;
      this.showProdutosCliente = false;
      this.showPedidosCliente = false;
      this.showLogoff = false;
      this.showMembros = false;
      this.showEditPedidoEquipe = false;
      localStorage.setItem("access-token", "");
      localStorage.removeItem("idEquipe");
      localStorage.removeItem("idCliente");
      router.push({ name: "homepage" });
    },
    homePage() {
      router.push({ name: "homepage" });
    },
    aboutPage() {
      router.push({ name: "about" });
    },
    membros() {
      router.push({ name: "equipe" });
    },
    produtosEquipe() {
      router.push({ name: "produtos" });
    },
    pedidosEquipe() {
      router.push({ name: "pedidosEquipe" });
    },
    produtosCliente() {
      router.push({ name: "produtosCliente" });
    },
    pedidosCliente() {
      router.push({ name: "pedidosCliente" });
    },
    pedidoCliente() {
      router.push({ name: "pedido" });
    }
  },
  mounted() {
    let equipe = localStorage.getItem("equipeId");
    let cliente = localStorage.getItem("idCliente");
    if((equipe === null || equipe === 0 ) && cliente !== null) {
      console.log("entrou");
      EventBus.$emit("openCliente");
    }else if(equipe!== null && (cliente === null || cliente === 0)){
      EventBus.$emit("openEquipe");
    }else {
      EventBus.$emit("openLogin");
    }
  }
};
</script>

<style scoped>
#tool-title {
  color: #d81b60;
  font-family: "Sacramento", cursive;
  margin-top: 5px;
  font-size: 2.25rem;
  cursor: pointer;
}

.appClass {
  height: 100%;
  display: grid;
  grid-template-rows: 50px auto 50px;
}

.teste {
  height: 100%;
}

.footer-text {
  color: #d81b60;
  padding-left: 5px;
}

#font-app {
  font-family: "Delius", cursive;
}

:-webkit-scrollbar-track {
  background-color: #f4f4f4;
}

:-webkit-scrollbar {
  width: 6px;
  background: #f4f4f4;
}

:-webkit-scrollbar-thumb {
  background: #dad7d7;
}
</style>
