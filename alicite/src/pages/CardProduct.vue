<template>
    <v-card
        max-width="344"
        class="mx-auto"
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

export default {
  name: 'CardProduct',
  props: ['produto'],
  vuetify: new Vuetify(),
  mounted() {
      console.log(produto);
  }
};
</script>

<style scoped>


</style>
