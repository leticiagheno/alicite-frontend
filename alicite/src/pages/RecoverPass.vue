<template>
  <v-container fill-height> 
    <v-card
      class="mx-auto"
      :width="width"
    >
    <v-list-item id="card-header" class="d-flex justify-space-between">
      <v-row>
        <v-icon color="pink darken-1" x-large>mdi-hanger</v-icon>
        <h2 id="card-title">Recuperar senha</h2>
      </v-row>
      <v-btn class="ma-2" @click="signUpPage" id="btn-new-user" color="pink darken-1" icon>
        Voltar
      </v-btn>
    </v-list-item>
    <v-card-text id="card-text">
      <v-form v-if="showEmail">
        <v-text-field
          label="Email"
          color="pink darken-1"
          outlined
          rounded
          required
        />
        <v-row class="d-flex justify-end">
          <v-btn
            @click="searchQuestion"
            text
            color="pink darken-1"
          > Buscar
          </v-btn>
        </v-row>
      </v-form>
        <div v-if="showQuestion">
          <hr id="input-question"/>
            <v-text-field
              color="pink darken-1"
              outlined
              readonly
              rounded
              label="Pergunta de segurança"
          ></v-text-field>
          <v-text-field
              color="pink darken-1"
              outlined
              readonly
              rounded
              required
              label="Resposta"
          ></v-text-field>
          <v-row class="d-flex justify-end">
            <v-btn
              @click="verifyQuestion"
              text
              color="pink darken-1"
            > Verificar
            </v-btn>
          </v-row>
        </div>
        <div v-if="showPass" id="div-question">
            <v-text-field
              color="pink darken-1"
              outlined
              readonly
              rounded
              label="Nova senha"
          ></v-text-field>
          <v-row class="d-flex justify-end">
            <v-btn
              @click="savePass"
              text
              color="pink darken-1"
            > Enviar
            </v-btn>
          </v-row>
        </div>
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
    width: 500,
    showEmail: true,
    showQuestion: false,
    showPass: false
  }),
  methods: {
      signUpPage() {
        router.push({ name: "signup" }) ;
      },
      searchQuestion() {
        this.showQuestion = true;
      },
      verifyQuestion() {
        this.showPass = true;
        this.showEmail = false,
        this.showQuestion = false;
      }, 
      savePass() {

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
