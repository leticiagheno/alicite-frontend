<template>
  <v-container fill-height>
    <v-card class="mx-auto" :width="width">
      <v-list-item id="card-header" class="d-flex justify-space-between">
        <v-row>
          <v-icon color="pink darken-1" x-large>mdi-hanger</v-icon>
          <h2 id="card-title">Novo Produto</h2>
        </v-row>
      </v-list-item>
      <v-card-text id="card-text">
        <v-form>
          <v-text-field
            label="Nome"
            color="pink darken-1"
            v-model="nome"
            outlined
            rounded
            required
          />
          <v-textarea
            label="Descrição"
            color="pink darken-1"
            v-model="descricao"
            outlined
            rounded
            required
          />
          <v-file-input
            label="Foto"
            color="pink darken-1"
            id="foto"
            outlined
            multiple
            rounded
            required
          />
          <v-row class="d-flex justify-end">
            <v-btn @click="saveProduct" text color="pink darken-1">Salvar</v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import axios from "axios";
import router from "../router";

export default {
  name: "RecoverPass",
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 800,
    nome: "",
    descricao: ""
  }),
  methods: {
    saveProduct() {
      var config = {
        headers: { "access-token": localStorage.getItem("access-token") }
      };
      axios
        .post(
          "http://localhost:3000/produto/cadastrar",
          {
            nome: this.nome,
            descricao: this.descricao
          },
          config
        )
        .then(() => {
          alert("Produto cadastrado com sucesso!");
          router.push({ name: "homepage" });
        })
        .catch(() => alert("Erro ao cadastrar produto!"));
    }
  },
  beforeMount() {
    var accessToken = localStorage.getItem("access-token");
    if (accessToken === "") {
      alert("Acesso não autorizado");
      router.push({ name: "homepage" });
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

#input-question {
  margin: 15px 0px;
}
</style>
