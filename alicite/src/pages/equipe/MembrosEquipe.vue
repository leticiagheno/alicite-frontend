<template>
  <v-container fill-height>
    <v-card class="mx-auto" :width="500">
      <v-list-item id="card-header" class="d-flex justify-space-between align-baseline">
        <v-row>
          <v-icon color="pink darken-5">mdi-hanger</v-icon>
          <h3 id="card-title">Membros da equipe</h3>
        </v-row>
        <v-btn @click="novoMembro" id="btn-new-user" color="pink darken-1" icon>
          <v-icon color="pink darken-5">mdi-account-plus</v-icon>
        </v-btn>
      </v-list-item>
      <v-data-table hide-default-footer :headers="headers" :items="equipe"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "../../router";
import * as jwt from "jsonwebtoken";
import axios from "axios";

export default {
  name: "Login",
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 750,
    equipe: [],
    headers: [
      {
        text: "Nome",
        align: "center",
        sortable: false,
        value: "nome"
      },
      {
        text: "Cargo",
        align: "center",
        sortable: false,
        value: "cargo"
      },
      {
        text: "Email",
        align: "center",
        sortable: false,
        value: "email"
      }
    ]
  }),
  methods: {
    novoMembro() {
      router.push({ name: "novoMembro" });
    },
    editItem(item) {
      alert(item);
    },
    deleteItem(item) {
      alert(item);
    }
  },
  beforeMount() {
    var config = {
      headers: { "access-token": localStorage.getItem("access-token") }
    };
    var accessToken = localStorage.getItem("access-token");
    if (accessToken === "") {
      alert("Acesso não autorizado!");
      router.push({ name: "homepage" });
    } else {
      var decoded = jwt.decode(accessToken);
      if (decoded.aud === "AliciteAudience") {
        axios.get("http://localhost:3000/equipe", config).then(response => {
          this.equipe = response.data;
        });
      } else {
        alert("Acesso não autorizado");
        router.push({ name: "homepage" });
      }
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
