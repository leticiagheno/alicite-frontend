<template>
    <v-row fill-height> 
          <vue-chunks :items="produtos" :columns="4" chunk-class="row mb-4" item-class="col-4">
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


</style>