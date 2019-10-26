<template>
    <v-card
        max-width="400"
        height="400"
        class="mx-auto" 
        @click="openProductPage"
    >
    <v-img
        class="white--text"
        height="200px"
        :src="produto.foto"
    >
    </v-img>
    <v-card-title>{{produto.nome}}</v-card-title>
        <v-card-text>
            <p> {{produto.descricao}} </p>
        </v-card-text>
    </v-card>
</template>

<script>
import Vuetify from 'vuetify/lib';
import router from "../router";

export default {
  name: 'CardProduct',
  props: ['produto'],
  vuetify: new Vuetify(),
  methods: {
    openProductPage(){
        router.push( 
        { 
            name: "purchPage", 
            params: {
                produto: this.produto,
                id: this.produto.id
            },
        });
    }
  }
};
</script>

<style scoped>


</style>
