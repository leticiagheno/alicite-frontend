<template> 
    <v-col>
        <v-row>
            <v-col>
                <v-row>
                    <span> Tórax </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.torax }} </span>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                    <span> Busto </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.busto }} </span>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <span> Cintura </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.cintura }} </span>
                </v-row>
            </v-col>
             <v-col>
                <v-row>
                    <span> Altura da peça </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.altura }} </span>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                 <v-row>
                    <span> Ombro </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.ombro }} </span>
                </v-row>
            </v-col>
            <v-col>
                 <v-row>
                    <span> Quadril </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.quadril }} </span>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <span> Altura manga curta </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.alturaMangaCurta }} </span>
                </v-row>
            </v-col>
             <v-col>
                <v-row>
                    <span> Altura manga longa </span>
                </v-row>
                <v-row>
                    <span> {{ pedido.alturaMangaLonga }} </span>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-row>
                <span> Observações </span>
            </v-row>
            <v-row>
                <span> {{ pedido.observacoes }} </span>
            </v-row>
        </v-row>
    </v-col>
</template>

<script>
import Vuetify from "vuetify/lib";

export default {
  name: "SuperiorView",
  props: ['pedido'],
  vuetify: new Vuetify(),
  data: () => ({
    width: 600,
  }),
  beforeMount() {
      console.log(this.pedido);
  }
};
</script>