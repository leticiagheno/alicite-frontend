<template>
<v-row>
  <v-col v-if="!loading">
    <v-row style="padding-left: 3rem;">
      <h1 style="color: #9C27B0">Pedido Nº {{ this.compra.id }}</h1>
    </v-row>
    <v-row>
      <v-col style="max-width: 60rem; max-height: 100%; overflow-y: auto">
        <v-timeline dense clipped>
          <v-timeline-item fill-dot class="white--text mb-12" color="purple" large>
            <v-text-field
              v-model="input"
              hide-details
              flat
              label="Comentário.."
              solo
              @keydown.enter="comment"
            >
              <template v-slot:append>
                <v-btn class="mx-0" depressed @click="comment">Enviar</v-btn>
              </template>
            </v-text-field>
          </v-timeline-item>

          <v-slide-x-transition group>
            <Chat v-for="chat in items" :key="chat.id" :chat="chat" />
          </v-slide-x-transition>
        </v-timeline>
      </v-col>
      <v-col>
        <v-row style="display: flex; justify-content: flex-end; padding-right: 2rem;">
          <v-card style="max-width: 25rem">
            <v-col>
              <v-row>
                <v-col>
                  <h3 style="color: #9C27B0">{{this.compra.produto.nome}}</h3>
                  <v-row style="padding: 0.2rem 0.7rem">
                    <span>{{this.compra.produto.descricao}}</span>
                  </v-row>
                  <v-row style="padding: 0.2rem 0.7rem">
                    <span>R$ {{this.compra.produto.valor}}</span>
                  </v-row>
                  <v-row style="padding: 0.2rem 0.7rem">
                    <span>Status: {{this.compra.status}}</span>
                  </v-row>
                </v-col>
                <v-col>
                  <v-img :src="this.compra.produto.foto" style="max-width: 10rem" />
                </v-col>
              </v-row>
            </v-col>
            <v-row style="padding: 0.2rem 1.3rem">
              <h3 style="color: #9C27B0">Medidas</h3>
            </v-row>
            <v-row style="padding: 0.2rem 1rem">
              <InferiorView v-if="inferior" :pedido="this.compra" />
              <SuperiorView v-if="superior" :pedido="this.compra" />
              <VestidoView v-if="vestido" :pedido="this.compra" />
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
    <v-overlay color="#eeeeee" opacity="1.00" :value="loading">
      <v-progress-circular color="pink" indeterminate size="64"></v-progress-circular>
    </v-overlay>
</v-row>
</template>

<script>
import Vuetify from "vuetify/lib";
import Chat from "./components/Chat";
import InferiorView from "./components/InferiorView";
import SuperiorView from "./components/SuperiorView";
import VestidoView from "./components/VestidoView";
import axios from "axios";

export default {
  name: "PedidoPage",
  components: {
    Chat,
    InferiorView,
    SuperiorView,
    VestidoView
  },
  data: function() {
    return {
      items: [],
      input: null,
      nonce: 0,
      vestido: false,
      inferior: false,
      superior: false,
      loading: true,
      id: 0,
      compra: null
    };
  },
  computed: {
    timeline() {
      return this.items.slice().reverse();
    }
  },
  vuetify: new Vuetify(),
  async beforeMount() {
    this.id = this.$route.params.id;
    var config = {
      headers: { "access-token": localStorage.getItem("access-token") }
    };
    await axios
      .get("http://localhost:3000/compras/" + this.id, config)
      .then((response) => {
        this.compra = response.data;
      });
    await axios
      .get("http://localhost:3000/chat/" + this.id, config)
      .then(response => {
        this.items = response.data;
      });
    if (this.compra.produto.tipo === "Vestido") {
      this.vestido = true;
    } else if (this.compra.produto.tipo === "Blusa/Casaco") {
      this.superior = true;
    } else {
      this.inferior = true;
    }
    this.loading = false;
  },
  methods: {
    comment() {
      const time = new Date();
      let chat = {
        id: this.nonce++,
        clienteId: this.compra.clienteId,
        compraId: this.compra.id,
        texto: this.input,
        dataRegistro: time
      };
      this.items.push(chat);
      var config = {
        headers: { "access-token": localStorage.getItem("access-token") }
      };
      axios.post("http://localhost:3000/chat/", chat, config);

      this.input = null;
    }
  }
};
</script>