<template>
  <v-app>
    <v-app-bar
      color="grey lighten-4"
      dense
      flat="false"
    >
      <v-toolbar-title id="tool-title">Alicitê</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon color="pink lighten-1">mdi-account-supervisor</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view/>
  </v-app>
</template>

<script>
import Vuetify from 'vuetify/lib';

export default {
  name: 'App',
  vuetify: new Vuetify()
};
</script>

<style scoped>

#tool-title {
  color: #D81B60;
  font-family: 'Sacramento', cursive;
  margin-top: 5px;
  font-size: 2.25rem;
}

</style>
