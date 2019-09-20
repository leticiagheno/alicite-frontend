<template>
  <v-container fill-height> 
    <v-card
      class="mx-auto"
      :width="width"
    >
    <v-list-item id="card-header" class="d-flex justify-space-between">
      <v-row>
        <v-icon color="pink darken-1" x-large>mdi-hanger</v-icon>
        <h2 id="card-title">Novo Produto</h2>
      </v-row>
      <v-btn class="ma-2" @click="signUpPage" id="btn-new-user" color="pink darken-1" icon>
        Voltar
      </v-btn>
    </v-list-item>
    <v-card-text id="card-text">
      <v-form>
        <v-text-field
          label="Nome"
          color="pink darken-1"
          outlined
          rounded
          required
        />
        <v-textarea
          label="Descrição"
          color="pink darken-1"
          outlined
          rounded
          required
        />
        <v-file-input
          label="Foto"
          color="pink darken-1"
          outlined
          multiple
          rounded
          required
        />
        <v-row class="d-flex justify-end">
          <v-btn
            @click="searchQuestion"
            text
            color="pink darken-1"
          > Salvar
          </v-btn>
        </v-row>
      </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from 'vuetify/lib';
import router from "../router";

export default {
  name: 'RecoverPass',
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 800
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

#input-question {
  margin: 15px 0px;
}

</style>
