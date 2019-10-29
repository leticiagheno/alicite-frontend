<template>
  <v-container fill-height>
    <v-card class="mx-auto" :width="750">
      <v-list-item id="card-header" class="d-flex justify-space-between align-baseline">
        <v-row>
          <v-icon color="pink darken-5">mdi-hanger</v-icon>
          <h3 id="card-title">Seus pedidos</h3>
        </v-row>
      </v-list-item>
      <v-data-table
        hide-default-footer
        loading-text="Carregando dados.."
        :loading="this.loading"
        :headers="headers"
        :items="items"
      >
        <template v-slot:item.action="{ item }">
          <v-icon small color="pink" class="mr-2" @click="click(item)">mdi-cursor-default-click</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "../../router";
import * as jwt from "jsonwebtoken";
import axios from "axios";

export default {
  name: "ListPedidosPage",
  vuetify: new Vuetify(),
  data: () => ({
    loading: true,
    media: true,
    actions: true,
    raised: true,
    width: 1200,
    items: [],
    headers: [
      {
        text: "Código",
        align: "center",
        sortable: false,
        value: "id"
      },
      {
        text: "Produto",
        align: "center",
        sortable: false,
        value: "produto.nome"
      },
      {
        text: "Valor médio",
        align: "center",
        sortable: false,
        value: "produto.valor"
      },
      {
        text: "Cliente",
        align: "center",
        sortable: false,
        value: "cliente.nome"
      },
      {
        text: "Status",
        align: "center",
        sortable: false,
        value: "status"
      },
      { text: "Ações", value: "action", sortable: false }
    ]
  }),
  methods: {
    click(item) {
      router.push({ name: "pedido", params: { compra: item } });
    }
  },
  beforeMount() {
    var config = {
      headers: { "access-token": localStorage.getItem("access-token") }
    };
    var accessToken = localStorage.getItem("access-token");
    var id = localStorage.getItem("idCliente");
    if (accessToken === "") {
      alert("Acesso não autorizado!");
      router.push({ name: "homepage" });
    } else {
      var decoded = jwt.decode(accessToken);
      if (decoded.aud === "AliciteAudience") {
        axios.get("http://localhost:3000/compras/", config).then(response => {
          this.items = response.data;
          this.loading = false;
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
