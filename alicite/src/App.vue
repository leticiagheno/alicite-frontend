<template>
  <v-app
    color="grey lighten-5"
    id="font-app"
  >
    <v-app-bar
      color="grey lighten-3"
      dense
    >
      <v-toolbar-title @click="homePage" id="tool-title">Alicitê</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn @click="loginPage" text color="pink lighten-1">Login</v-btn>
        <v-btn icon>
          <v-icon color="pink lighten-1">mdi-account-supervisor</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view />
      
      <v-footer color="grey lighten-3">
        <v-icon color="pink lighten-1" id="hanger">mdi-information</v-icon> 
        <a @click="aboutPage" class="footer-text">Sobre</a>
        <div class="flex-grow-1"></div>
        <v-icon color="pink lighten-1" id="hanger">mdi-hanger</v-icon>
        <div><a class="footer-text" href="https://github.com/leticiagheno"> &copy; Letícia Gheno Baldissarelli</a></div>
      </v-footer>
  </v-app>
</template>

<script>
import Vuetify from 'vuetify/lib';
import router from "./router";

export default {
  name: 'App',
  vuetify: new Vuetify(),
  methods: {
    loginPage() {
      router.push({ name: "login" }) ;
    },
    homePage(){
      router.push({ name: "homepage" }) ;
    },
    aboutPage(){
      router.push({ name: "about" }) ;
    }
  }
};
</script>

<style scoped>

#tool-title {
  color: #D81B60;
  font-family: 'Sacramento', cursive;
  margin-top: 5px;
  font-size: 2.25rem;
  cursor: pointer;
}

.footer-text {
  color: #D81B60;
  padding-left: 5px;
}

#font-app {
 font-family: 'Delius', cursive;
}

</style>
