<template>
  <v-timeline-item :color="this.color" small>
    <v-row justify="space-between">
      <v-col cols="7">{{this.chat.texto}}</v-col>
      <v-col class="text-right" cols="5">{{this.chat.dataRegistro | formatDate}}</v-col>
    </v-row>
  </v-timeline-item>
</template>

<script>
import Vuetify from "vuetify/lib";
import Vue from "vue";

import moment from "moment";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:mm");
  }
});

export default {
  name: "Chat",
  props: ["chat"],
  data: function() {
    return {
      color: ""
    };
  },
  vuetify: new Vuetify(),
  mounted() {
    this.color =
      this.chat.equipeId === undefined || this.chat.equipeId === null
        ? "purple"
        : "pink";
  }
};
</script>