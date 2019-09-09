<template>
  <v-container fill-height> 
    <v-card
      class="mx-auto"
      :width="width"
    >
    <v-list-item id="card-header" class="d-flex justify-space-between">
      <v-row>
        <v-icon color="pink darken-1" x-large>mdi-hanger</v-icon>
        <h2 id="card-title">Login Cliente</h2>
      </v-row>
      <v-btn class="ma-2" @click="signUpPage" id="btn-new-user" color="pink darken-1" icon>
        Registrar
      </v-btn>
    </v-list-item>
    <v-card-text id="card-text">
      <v-form>
        <v-text-field
          label="E-mail"
          color="pink darken-1"
          outlined
          rounded
          required
        />
        <v-text-field
          label="Senha"
          type="Password"
          color="pink darken-1"
          outlined
          rounded
          required
        />
      </v-form>
        <div class="d-flex justify-space-between align-center">
          <div>
            <v-btn
              text
              id="btn-forget-pass"
              color="pink darken-1"
            > Esqueci minha senha
          </v-btn>
          </div>
          <div>
            <v-btn
              text
              color="pink lighten-1"
            > Entrar
          </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from 'vuetify/lib';
import router from "../router";

export default {
  name: 'Login',
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 500
  }),
  methods: {
      signUpPage() {
        router.push({ name: "signup" }) ;
      }
  }
};
</script>

<style scoped>

#page {
   overflow-y: auto;
}

#card-header {
  padding: 10px 30px;
  margin-bottom: 0px;
  color: #D81B60;
  background-color: #EEEEEE;
}

#card-title {
  padding: 5px 5px 0px 5px;
  margin-bottom: 0px;
  color: #D81B60;
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

</style>
