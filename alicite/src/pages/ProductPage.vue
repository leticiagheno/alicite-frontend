<template>
  <v-container fill-height>
    <v-col>
      <v-row>
        <h1 id="card-title">{{ produto.nome }}</h1>
      </v-row>
      <v-row>
        <v-col md="4">
          <v-img :src="produto.foto"/>
        </v-col>
        <v-col>
          <v-row class="d-flex flex-row-reverse align-self-end">
            <v-btn @click="purch"> Comprar </v-btn>
          </v-row>
          <v-row class="d-flex justify-center">
            <h4> {{ produto.descricao }} </h4>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "../router";

export default {
  name: "ProductPage",
  props: ['produto'],
  vuetify: new Vuetify(),
  data: () => ({
    width: 600,
    clienteId: ''
  }),
  methods: {
    purch() {
      router.push({ name: "purchPage", params: { produto: this.produto }});
    }
  },
};
</script>

<style scoped>
#page {
  overflow-y: auto;
}

#card-header {
  padding: 10px 30px;
  margin-bottom: 0px;
  color: #d81b60;
  background-color: #eeeeee;
}

#card-title {
  padding: 5px 5px 0px 5px;
  margin-bottom: 0px;
  color: #d81b60;
}

#card-layout {
  padding: 15px;
}

#card-text {
  padding-top: 35px;
}

#btn-new-user {
  padding-right: 35px;
  margin: 0px !important;
}

#input-question {
  margin: 15px 0px;
}
</style>
