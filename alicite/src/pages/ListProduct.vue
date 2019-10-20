<template>
    <v-row fill-height class="list"> 
      <div class="d-flex align-end flex-column">
        <v-btn @click="novoProduto"> Novo Produto </v-btn>
      </div>
          <vue-chunks :items="produtos" :columns="3" chunk-class="row mb-4" item-class="col-4">
              <template slot-scope="produto">
              <CardProduct  
                v-bind:key="produto.id" 
                :produto ="produto.item" />
            </template>
          </vue-chunks>
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
      produtos: []
    }
  },
  methods: {
    novoProduto() {
       router.push( 
        { 
            name: "registerProduct",
        });
    }
  },
  vuetify: new Vuetify(),
  beforeMount() {
    var config = {
      headers: { "access-token": localStorage.getItem("access-token") }
    };
    axios
      .get("http://localhost:3000/produto", config)
      .then(response => (this.produtos = response.data));
  }
};
</script>

<style scoped>
.list {
  padding: 5% 20%;
}

</style>