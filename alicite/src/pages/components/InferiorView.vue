<template>
  <v-col>
    <v-row style="padding: 0.2rem 0.5rem">
      <v-col>
        <v-row>
          <span>Quadril</span>
        </v-row>
        <v-row>
          <span>{{ pedido.quadril }}</span>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <span>Cintura</span>
        </v-row>
        <v-row>
          <span>{{ pedido.cintura }}</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="padding: 0.2rem 0.5rem">
      <v-col>
        <v-row>
          <span>Coxa</span>
        </v-row>
        <v-row>
          <span>{{ pedido.coxa }}</span>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <span>Panturrilha</span>
        </v-row>
        <v-row>
          <span>{{ pedido.panturrilha }}</span>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <span>Altura da peça</span>
        </v-row>
        <v-row>
          <span>{{ pedido.altura }}</span>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="padding: 0.2rem 0.5rem">
      <v-col>
        <v-row>
          <span>Observações</span>
        </v-row>
        <v-row>
          <span>{{ pedido.observacoes }}</span>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Vuetify from "vuetify/lib";

export default {
  name: "InferiorView",
  props: ["pedido"],
  vuetify: new Vuetify(),
  data: () => ({
    width: 600
  }),
  beforeMount() {
    console.log(this.pedido);
  }
};
</script>