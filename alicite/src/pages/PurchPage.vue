<template>
  <v-container fill-height>
    <v-col md="10">
      <h1 style="color: #E91E63">Medidas</h1>
      <v-form>
        <InferiorForm v-if="inferior" :pedido="this.pedido" />
        <SuperiorForm v-if="superior" :pedido="this.pedido" />
        <VestidoForm v-if="vestido" :pedido="this.pedido" />
      </v-form>
    </v-col>
    <v-col style="padding-left: 2rem;">
      <v-row style="display: flex; justify-content: flex-end; ">
        <v-card style="max-width: 45rem">
          <v-col>
            <v-row>
              <v-col>
                <h2 style="color: #E91E63; text-align: center;">{{this.produto.nome}}</h2>
                <v-row style="padding: 0.2rem 0.7rem; text-align: center;">
                  <span>{{this.produto.descricao}}</span>
                </v-row>
                <v-row>
                <v-col>
                  <v-img :src="this.produto.foto" style="max-width: 15rem" />
                </v-col>
                </v-row>
                <v-row style="padding: 0.2rem 0.7rem;">
                  <h3 style="text-align: end; width: 100%; color: #E91E63;">R$ {{this.produto.valor}}</h3>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-row>
      <v-row style="display: flex; justify-content: flex-end; padding: 1rem 0rem;">
        <v-btn class="buttons" rounded dark color="pink" @click="back">Voltar</v-btn>
        <v-btn class="buttons" rounded dark color="pink" @click="save">Salvar</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import SuperiorForm from "./components/SuperiorForm.vue";
import InferiorForm from "./components/InferiorForm.vue";
import VestidoForm from "./components/VestidoForm.vue";
import router from "../router";
import axios from "axios";

export default {
  name: "PurchPage",
  props: ["produto"],
  components: {
    SuperiorForm,
    VestidoForm,
    InferiorForm
  },
  vuetify: new Vuetify(),
  data: () => ({
    width: 600,
    vestido: false,
    superior: false,
    inferior: false,
    pedido: {}
  }),
  methods: {
    save() {
      var config = {
        headers: { "access-token": localStorage.getItem("access-token") }
      };
      var clienteId = localStorage.getItem("idCliente");
      axios
        .post(
          "http://localhost:3000/compras",
          {
            produtoId: this.produto.id,
            torax: this.pedido.torax,
            busto: this.pedido.busto,
            cintura: this.pedido.cintura,
            quadril: this.pedido.quadril,
            altura: this.pedido.altura,
            ombro: this.pedido.ombro,
            alturaMangaCurta: this.pedido.alturaCurta,
            alturaMangaLonga: this.pedido.alturaLonga,
            larguraCoxa: this.pedido.larguraCoxa,
            larguraPanturrilha: this.pedido.panturrilha,
            observacoes: this.pedido.observacoes,
            clienteId: clienteId,
            status: "Pendente"
          },
          config
        )
        .then(() => {
          this.$swal("Atenção!", "Pedido realizado com sucesso!", "success");
          router.push({ name: "pedidosCliente" });
        })
        .catch(() =>
          this.$swal("Atenção!", "Erro ao realizar pedido!", "error")
        );
    },
    back() {
      router.push({ name: "produtosCliente" });
    }
  },
  beforeMount() {
    if (this.produto.tipo == "Vestido") {
      this.vestido = true;
    } else if (this.produto.tipo == "Calça/Saia") {
      this.inferior = true;
    } else {
      this.superior = true;
    }
  }
};
</script>

<style scoped>
.buttons {
  margin: 5px;
}

.descricao {
  margin-bottom: 10px;
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
