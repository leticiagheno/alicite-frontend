<template>
  <v-container fill-height> 
    <v-card
      class="mx-auto"
      :width="width"
    >
    <v-list-item id="card-title" class="d-flex justify-space-between">
      <v-icon color="white" x-large>mdi-hanger</v-icon>
      <v-btn class="ma-2" id="btn-new-user" color="white" icon>
        <v-icon>mdi-account-plus </v-icon> 
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

export default {
  name: 'Login',
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 500
  }),
};
</script>

<style scoped>

#page {
   overflow-y: auto;
}

#card-layout {
  padding: 15px;
}

#card-title {
  background-color: #D81B60;
}

#card-text {
  padding-top: 35px;
}

#btn-new-user {
  margin: 0px !important;
}

</style>
