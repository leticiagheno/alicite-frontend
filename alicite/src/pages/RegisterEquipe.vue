<template>
  <v-container fill-height>
    <v-card class="mx-auto" :width="1000">
      <v-list-item id="card-header" class="d-flex justify-space-between">
        <v-row>
          <v-icon color="pink darken-5" x-large>mdi-hanger</v-icon>
          <h2 id="card-title">Novo membro da equipe</h2>
        </v-row>
      </v-list-item>

      <v-form class="form-padding">
        <v-text-field label="Nome" color="pink darken-1" v-model="nome" outlined rounded required />
        <v-text-field
          label="Cargo"
          color="pink darken-1"
          v-model="cargo"
          outlined
          rounded
          required
        />
        <v-text-field
          label="Email"
          v-model="email"
          color="pink darken-1"
          outlined
          rounded
          required
        />
        <v-text-field
          label="Senha"
          v-model="senha"
          type="Password"
          color="pink darken-1"
          outlined
          rounded
          required
        />
        <v-row class="d-flex justify-end">
          <v-btn text color="pink lighten-1" @click="register">Registrar</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "../router";
import axios from "axios";

export default {
  name: "Login",
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 750,
    nome: "",
    cargo: "",
    email: "",
    senha: ""
  }),
  methods: {
    register() {
      axios
        .post("http://localhost:3000/login/signup/equipe", {
          nome: this.nome,
          cargo: this.cargo,
          email: this.email,
          senha: this.senha
        })
        .then(() => {
          router.push({ name: "equipe" });
        });
    }
  },
  beforeMount() {
    var accessToken = localStorage.getItem("access-token");
    if (accessToken === "") {
      alert("Acesso não autorizado!");
      router.push({ name: "homepage" });
    }
  }
};
</script>

<style scoped>
#page {
  overflow-y: auto;
}

#card-title {
  padding: 15px 15px 10px 15px;
  margin-bottom: 0px;
  color: #d81b60;
}

#hanger {
  margin-left: 30px;
}

#stepper-background {
  background-color: #f8bbd0;
}

#card-text {
  padding-top: 20px;
}

#card-header {
  padding-top: 5px;
  padding-left: 25px;
  margin-bottom: 0px;
  color: #d81b60;
  background-color: #eeeeee;
}

#btn-new-user {
  margin: 0px !important;
}

.input-padding {
  padding: 0px 12px 0px 12px;
}

.stepper-padding {
  padding: 12px;
}

.form-padding {
  padding: 10px 35px 10px 10px;
}

.text-color {
  color: #d81b60;
}
</style>
