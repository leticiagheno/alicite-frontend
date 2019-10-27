<template>
  <v-container fill-height>
    <v-card class="mx-auto" :width="width">
      <v-list-item id="card-header" class="d-flex justify-space-between">
        <v-row>
          <v-icon color="pink darken-1" x-large>mdi-hanger</v-icon>
          <h2 id="card-title">Login cliente</h2>
        </v-row>
        <v-btn
          class="ma-2"
          @click="signUpPage"
          id="btn-new-user"
          color="pink darken-1"
          icon
        >Registrar</v-btn>
      </v-list-item>
      <v-card-text id="card-text">
        <v-form>
          <v-text-field
            label="E-mail"
            color="pink darken-1"
            v-model="email"
            outlined
            rounded
            required
          />
          <v-text-field
            label="Senha"
            type="Password"
            v-model="senha"
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
              @click="forgetPass"
            >Esqueci minha senha</v-btn>
          </div>
          <div>
            <v-btn text color="pink lighten-1" @click="login">Entrar</v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "../router";
import axios from "axios";
import { EventBus } from "../main";

export default {
  name: "Login",
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 500,
    email: "",
    senha: ""
  }),
  methods: {
    signUpPage() {
      router.push({ name: "signup" });
    },
    forgetPass() {
      router.push({ name: "recoverPass" });
    },
    login() {
      axios
        .post("http://localhost:3000/login/signin/cliente", {
          email: this.email,
          senha: this.senha
        })
        .then(response => {
          localStorage.setItem("access-token", response.data.token);
          console.log(response.data.token);
          EventBus.$emit("openCliente");
          router.push({ name: "produtosCliente", params: {
                clienteId: response.data.id
            }, });
        })
        .catch(() =>
          this.$swal('Erro ao realizar login!', 'Verifique seu e-mail e senha.', 'error')
        );
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
  color: #d81b60;
  background-color: #eeeeee;
}

#card-title {
  padding: 5px 5px 0px 5px;
  margin-bottom: 0px;
  color: #d81b60;
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
