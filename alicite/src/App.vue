<template>
  <v-app
    color="grey lighten-4"
    id="font-app"
  >
    <v-app-bar
      color="pink lighten-4"
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
      <v-footer color="pink lighten-4">
        <div class="flex-grow-1"></div>
        <v-icon color="white" id="hanger">mdi-hanger</v-icon>
        <div><a id="footer-text" href="https://github.com/leticiagheno"> &copy; Letícia Gheno Baldissarelli</a></div>
      </v-footer>
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

#footer-text {
  color: #D81B60;
  padding-left: 5px;
}

#font-app {
 font-family: 'Delius', cursive;
}

</style>
