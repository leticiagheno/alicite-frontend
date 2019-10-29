<template>
  <v-col>
    <v-row style="padding-left: 3rem;">
      <h1>Pedido Nº {{ this.compra.id }}</h1>
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
      <v-col style="padding-left: 2rem;">
        <v-row>
          <v-col>
            <h3>{{this.compra.produto.nome}}</h3>
            <v-row>
              <span>{{this.compra.produto.descricao}}</span>
            </v-row>
            <v-row>
              <span>R$ {{this.compra.produto.valor}}</span>
            </v-row>
            <v-row>
              <span>Status: {{this.compra.status }}</span>
            </v-row>
          </v-col>
          <v-col style="display: flex; justify-content: flex-end;">
            <v-img :src="this.compra.produto.foto" style="max-width: 10rem" />
          </v-col>
        </v-row>
        <v-row>
          <InferiorView v-if="inferior" :pedido="this.compra" />
          <SuperiorView v-if="superior" :pedido="this.compra" />
          <VestidoView v-if="vestido" :pedido="this.compra" />
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Vuetify from "vuetify/lib";
import Chat from "../components/Chat";
import InferiorView from "../components/InferiorView";
import SuperiorView from "../components/SuperiorView";
import VestidoView from "../components/VestidoView";
import axios from "axios";

export default {
  name: "EditPedidoPage",
  props: ["compra"],
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
      superior: false
    };
  },
  computed: {
    timeline() {
      return this.items.slice().reverse();
    }
  },
  vuetify: new Vuetify(),
  beforeMount() {
    console.log(this.compra.produto);
    if (this.compra.produto.tipo === "Vestido") {
      this.vestido = true;
    } else if (this.compra.produto.tipo === "Blusa/Casaco") {
      this.superior = true;
    } else {
      this.inferior = true;
    }
    var config = {
      headers: { "access-token": localStorage.getItem("access-token") }
    };
    axios
      .get("http://localhost:3000/chat/" + this.compra.id, config)
      .then(response => {
        this.items = response.data;
        this.loading = false;
      });
  },
  methods: {
    comment() {
      let equipeId = localStorage.getItem("equipeId");
      const time = new Date();
      let chat = {
        id: this.nonce++,
        equipeId: equipeId,
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