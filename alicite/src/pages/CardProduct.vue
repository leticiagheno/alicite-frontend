<template>
  <v-hover v-slot:default="{hover}">
    <v-card max-width="400" height="400" class="mx-auto" @click="openProductPage">
      <v-img class="white--text" height="200px" :src="produto.foto"></v-img>
      <v-card-title>{{produto.nome}}</v-card-title>
      <v-card-text>
        <span>{{produto.descricao}}</span>
        <h4>R${{ produto.valor }}</h4>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "../router";

export default {
  name: "CardProduct",
  props: ["produto", "clienteId"],
  vuetify: new Vuetify(),
  methods: {
    openProductPage() {
      router.push({
        name: "purchPage",
        params: {
          produto: this.produto,
          id: this.produto.id,
          clienteId: this.clienteId
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
