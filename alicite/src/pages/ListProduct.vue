<template>
    <v-row fill-height class="list"> 
      <div v-if="!loading">
        <vue-chunks 
          :items="produtos" 
          :columns="3" 
          chunk-class="row mb-4" 
          item-class="col-4">
            <template slot-scope="produto">
            <CardProduct  
              v-bind:key="produto.id" 
              :produto ="produto.item"
              :clienteId ="clienteId" />
          </template>
        </vue-chunks>
      </div>
        <v-overlay color="#eeeeee" opacity="1.00" :value="loading">
          <v-progress-circular color="pink" indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-row>
</template>

<script>
import Vuetify from 'vuetify/lib';
import axios from "axios";
import CardProduct from "./CardProduct.vue";
import _ from 'lodash';
import router from "../router";

export default {
  name: 'ListProduct',
  props: ['clienteId'],
  components: {
    CardProduct, 
  },
  computed: {
    productChunks(){
        return _.chunk(_.toArray(this.produtos), 3);
    }
  },
  data() {
    return {
      produtos: [],
      loading: true
    }
  },
  vuetify: new Vuetify(),
  beforeMount() {
    console.log(this.clienteId);
    var config = {
      headers: { "access-token": localStorage.getItem("access-token") }
    };
    axios
      .get("http://localhost:3000/produto", config)
      .then(response => {this.produtos = response.data; this.loading = false});
  }
};
</script>

<style scoped>
.list {
  padding: 5% 20%;
}

</style>