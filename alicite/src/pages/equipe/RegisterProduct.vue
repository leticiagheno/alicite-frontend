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
          <div>
            <div id="box" class="d-flex align-end flex-column" >
             <v-img max-height="100%" :src="this.foto"/>
              <label class="upload">
                <v-icon color="pink darken-1" class="custom-file-upload" large>mdi-camera</v-icon>
                <input type="file" @change="loadTextFromFile"/>
              </label>
            </div>
          </div>
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
import router from "../../router";

export default {
  name: "RecoverPass",
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 800,
    nome: "",
    descricao: "",
    foto: ''
  }),
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.foto = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    saveProduct() {
      var config = {
        headers: { "access-token": localStorage.getItem("access-token") }
      };
      axios
        .post(
          "http://localhost:3000/produto",
          {
            nome: this.nome,
            descricao: this.descricao,
            foto: this.foto
          },
          config
        )
        .then(() => {
          alert("Produto cadastrado com sucesso!");
          router.push({ name: "produtos" });
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

.upload {
  z-index: 1000;
  position: absolute;
}

#box {
  z-index: 100;
  position: relative;
  float: left;
  height: 250px;
  width: 350px;
  margin: 0px 10px 10px 10px;
  padding: 10px;
  border: solid;
  border-color: #d81b60;
  border-radius: 10px;
  background: transparent;
}

.custom-file-upload {
  padding-bottom: 15px;
}

input[type="file"] {
    display: none;
}

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
